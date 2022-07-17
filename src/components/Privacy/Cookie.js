import React from 'react';
import '../Privacy/PrivacyStyle.css'
import PageHeader from "../PageHeader";
import img from "../../assets/images/sep line who.png"
function CookiesPolicy() {
  return (
    <>
      <PageHeader title="Cookies policy" />
      <div style={{ color: 'white', paddingBottom: '100px' }}>
        <div className="containerpri" style={{ padding: "100px" }}>

          <img id='privacyImg' src={img} alt='line' />
          <h5 id='commH5'>Effective from: <span style={{ fontSize: '1.5rem', fontWeight: '300' }}>January 2021</span> </h5>
          <p id='commP'> This Cookie Statement explains how Create (hereinafter referred to as "Company", "we", "us", and "ours") use cookies and similar technologies to recognize you when you visit our websites at createprotocol.org and mercado.studio (“Websites”). It explains what these technologies are and why we use them, as well as your rights to control our use of them.<br /> This website is not intended for children and we do not knowingly collect personal data relating to children. References in this notice to “you” or “your” are references to individuals who use the Website.</p>


          <h2 id='commH2'>What are cookies?</h2>
          <p id='commP'>Cookies are text files containing small amounts of information which are downloaded to your device (e.g. computer, smartphone, electronic device which accesses the internet) when you visit a website. Cookies can be useful because they allow a website to recognize a user’s device, preferences and generally help to improve your online experience. You can find more information about cookies here, and here.<br /><br />Cookies set by the website owner (in this case, the Company) are called "first party cookies". Cookies set by parties other than the website owner are called "third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website (e.g. like advertising, interactive content and analytics). The parties that set these third-party cookies can recognize your computer or device both when it visits the website in question and also when it visits certain other websites.</p>


          <h2 id='commH2'>Necessary Cookies</h2>
          <p id='commP'> <strong>Purpose and/or activity of such Necessary Cookies:</strong> Necessary cookies are essential for the Company to provide you with the services that you request on our Website. They are also necessary for us to comply with legal obligations such as our security obligations under various data protection laws. We do not need to ask for your consent in order to use these cookies, as without them we would not be able to provide services requested by you. These cookies are always active on the website.<br /> <br /> <strong>Legal basis for processing: Necessary for our legitimate interests:</strong> It is in our interests to be able to provide our Website users with services they request and to enable the operation of our Website.</p>

          <h2 id='commH2'>Why do we use cookies?</h2>


          <p id='commP'>We use first party and third-party cookies for several reasons. Some cookies are required for technical reasons for our Websites to operate, and we refer to these as "Necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Websites. Third parties serve cookies through our Websites for the purposes of performance and analytics. This is described in more detail below. The specific types of first- and third-party cookies served through our Websites and the purposes they perform are described in the table below (please note that the specific cookies served may vary depending on the specific Website you visit):</p>
          <h2 id='commH2'>Types of cookies:</h2>
          {/* Table goes here */}
          <table>
            <tr>
              <th id="column1">Type of cookies</th>
              <th id="column2">Who serves these cookies</th>
              <th id="column3">How to refuse</th>
            </tr>
            <tr>
              <td><strong>Essential website cookies:</strong><br />These cookies are strictly necessary to provide you with services available through our Websites and to use some of its features, such as access to secure areas.	</td>
              <td>
                <div id="table-item"><ul><li> Create Protocol </li><li>Mercado Studio</li></ul></div>
              </td>
              <td id="table-item">How to refuse</td>
            </tr>
          </table>

          <h2 id='commH2'>How often will you update this Cookie Statement?</h2>
          <p id='commP'>We may update this Cookie Statement from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Statement regularly to stay informed about our use of cookies and related technologies. The date at the top of this Cookie Statement indicates when it was last updated.</p>

          <h2 id='commH2'>Where can I get further information?</h2>
          <p id='commP'>If you have any questions about our use of cookies or other technologies, please email us at info@createprotocol.org</p>
        </div>
      </div>
    </>
  );
}

export default CookiesPolicy;