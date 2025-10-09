import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4 mt-5">DSVendas</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr/>
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar dashboard
                    </Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}