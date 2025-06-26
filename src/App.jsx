import Card from "./component/Card"
import './App.css'
import data from "../public/data"

function App() {
    console.log(data);

    return (
        <div>
            <h2>Users</h2>
            <div className="container">
                <div className="cards">


                    {

                        data.map((odam, i) => {
                            return <Card key={i} ism={odam.name} p={odam.position}></Card>
                        })




                    }





                </div>
            </div>


        </div>
    )
}

export default App