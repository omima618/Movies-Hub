import Style from './Layout.module.css';
const Layout = (props) => {
    return <div className={Style['custom-container']}>{props.children}</div>;
};

export default Layout;
