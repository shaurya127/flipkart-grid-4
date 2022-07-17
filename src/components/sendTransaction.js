import { ethers } from "ethers";
import Swal from "sweetalert2";

export async function sendTransaction(
  contractInstance,
  methodName,
  arg,
  successMessage
) {
  if (window.wallet) {
    const A = await contractInstance
      .connect(window.wallet)
      .populateTransaction[methodName](...arg);

    console.log("call : ", A);
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to undo this action!",
      html: `<p>You will not be able to undo this action!</p>
                    <h1 style={{fontStyle:"bold"}}> Value : ${
                      A.value ? ethers.utils.formatEther(A?.value) : "0"
                    } </h1>
                    <small> To : ${A.to} </small><br/><small> From : ${
        A.from
      } ES </small>`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "No, cancel!",
      confirmButtonText: "Yes, do it!",
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return contractInstance
          .connect(window.wallet)
          [methodName](...arg)
          .then(async (res) => {
            await res.wait();

            Swal.fire({
              title: "Good job!",
              icon: "success",
              html: `<p>${successMessage}</p><br/>Transaction Hash<a href="https://rinkeby.etherscan.io/tx/${
                res.hash
              }">${"  "}${res.hash}</a> `,
            });
          })
          .catch(async () => {
            const add = window.wallet.address
              ? window.wallet.address
              : await window.wallet.getAddress();
            const x = new ethers.VoidSigner(add, window.provider);
            try {
              await contractInstance.connect(x).estimateGas[methodName](...arg);
            } catch (e) {
              console.log("Error is : ", e);
              Swal.fire("Oops...!", `${e.message || e}`, "error");
            }
          });
      },
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Please Connect to wallet ...",
    });
  }
}
