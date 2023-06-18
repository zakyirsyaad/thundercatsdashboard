import Linechart from "./chart/linechart";
import Piechart from "./chart/piechart";

// import './page.css'
export default function Home() {

    return (
        <section className="home-container">
            <Piechart />
            <Linechart />
        </section>
    )
}