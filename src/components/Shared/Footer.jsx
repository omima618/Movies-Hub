import Layout from '../UI/Layout/Layout';
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <Layout>
                <p className="text-center">
                    &#169;Copyright {currentYear}
                    <span className="text-primary"> Movies HuB</span>
                    <br />
                    Created By{' '}
                    <span className="text-primary">Omima Khaled</span>
                </p>
            </Layout>
        </footer>
    );
};

export default Footer;
