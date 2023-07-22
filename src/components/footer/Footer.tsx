import Styles from "./_Styles.module.scss";

const Footer = () => {
  return (
    <footer className={`${Styles.footer} bg-dark text-center text-white`}>
      <div className="text-center p-3">
        © 2023 Copyright:
        <a className="text-white" href="https://chernandezdev.online/">
          Berserker04
        </a>
      </div>
    </footer>
  );
};

export default Footer;
