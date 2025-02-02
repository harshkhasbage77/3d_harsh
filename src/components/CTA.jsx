import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='/3d_harsh/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
