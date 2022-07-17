import React from 'react'
import PageHeader from '../components/PageHeader'

const BlogDetailPage = () => {
  return (
    <div style={{ height: '250vh' }}>
      <PageHeader subtitle="Home  >  Blogs  >  An open call to artists" />
      <div className="blogDetail__container">
        <section className="profile">
          <div className="profile__wrapper">
            <div className="profile__images">
              <div id="profile_banner">
                <img src="/profile_banner.png" alt="profile banner" />
              </div>
              <div id="profile_pic">
                <img src="/profile.png" alt="profile image" />
              </div>
            </div>
            <div className="profile__info">
              <div className="profile__name">
                <h4>Bright Mba</h4>
                <img
                  style={{ marginLeft: '0.25rem' }}
                  src="/verified.svg"
                  alt="verified"
                />
              </div>
              <h5 className="profile__username">@brightmac</h5>
              <p className="profile__bio">
                I am an artist of the real world with creative ideas of the
                ancients arts in benin, Nigeria
              </p>
            </div>
          </div>
          <div className="profile__share">
            <p>Share this</p>
            <div
              className="blogDetail__divider"
              style={{ height: '1px', marginTop: 0 }}
            ></div>
            <div>
              <img src="/instagram.svg" className="share__icon" alt="" />
              <img src="/facebook.svg" className="share__icon" alt="" />
              <img src="/linkedin.svg" className="share__icon" alt="" />
              <img src="/twitter.svg" className="share__icon" alt="" />
            </div>
          </div>
        </section>
        <section className="blogDetail">
          <div className="blogDetail__header">
            <h3 className="blogDetail__date">January 01, 2022</h3>
            <h1 className="blogDetail__title">An Open Call to Artists</h1>
            <div className="faq-divider-inactive"></div>
          </div>
          <div className="blogDetail__image">
            <img src="/blog_detail_image.png" alt="" />
          </div>
          <p className="blogDetail__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            similique veritatis consequuntur, modi repellendus non? Porro
            mollitia accusamus possimus. Quod est laborum harum cupiditate quas
            officiis ipsum ab, doloribus nam suscipit a, vitae possimus quis
            maiores perferendis culpa necessitatibus quo, praesentium
            exercitationem accusamus dolores. Excepturi, eius, ullam culpa odit,
            eaque veritatis esse laudantium reprehenderit inventore vel error
            asperiores eveniet. Ad repellendus aut impedit cupiditate delectus
            sed dolor! Sequi autem expedita suscipit itaque ut quis numquam
            perspiciatis sapiente iusto reiciendis eveniet asperiores pariatur
            fuga, facilis corrupti fugiat recusandae ipsum libero! Voluptatem
            laudantium minima cum possimus reiciendis nisi, in minus repellat
            id.
          </p>
          <br />
          <p className="blogDetail__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            accusamus et laborum voluptatem porro eveniet nam consectetur, fuga
            molestiae, autem atque reprehenderit. Sit nam magni, rerum
            consequatur qui repellat? Nulla delectus aut culpa fuga rem?
            Repellat error ex cumque sit repellendus molestias reiciendis,
            praesentium enim aliquam assumenda expedita voluptas laborum aut
            totam? Officia hic est reprehenderit sint libero, consequuntur,
            sequi doloremque optio quos nostrum suscipit recusandae illo
            exercitationem eveniet? Sunt temporibus earum debitis inventore
            accusantium facere vel molestiae deserunt aperiam blanditiis, itaque
            soluta repellendus voluptatibus praesentium dolor corporis hic eius
            nisi enim. Sapiente eveniet veniam repudiandae eligendi, porro quas
            laborum doloribus id eius ipsum placeat consectetur voluptatum non
            culpa accusamus in velit, praesentium, impedit mollitia debitis
            consequuntur! Ut explicabo iusto, blanditiis est in, eveniet
            deserunt similique pariatur, possimus nulla debitis eaque odit
            voluptas aperiam cumque. Explicabo et illo aliquid, error assumenda
            quis qui atque provident laboriosam ad, architecto voluptas,
            aspernatur quaerat dicta doloremque temporibus quibusdam aperiam
            rerum. Voluptate hic quaerat quam, repellat nemo consectetur. Nisi
            laboriosam commodi suscipit odit illo itaque eius unde quae optio
            voluptatem, distinctio, non consequatur libero magnam amet facilis
            odio in corrupti, enim iusto. Ea veritatis ipsum impedit facilis
            quaerat tempora commodi quidem id dolorum non!
          </p>
        </section>
      </div>
    </div>
  )
}

export default BlogDetailPage
