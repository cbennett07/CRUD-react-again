import './App.css';
import {Component} from "react";
import WorkoutList from "./WorkoutList";
import FoodList from "./FoodList";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props)

        this.state={
            workouts: [],
            totalCalEx: 0,
            foods: [],
            totalCal: 0,

        };

    }

    componentDidMount() {
        this.fetchFoods();
        this.fetchWorkouts();
    }

    fetchWorkouts(){
        //console.log("fetching workouts")
        axios.get("http://localhost:3001/workout")
            .then(response => this.setState({workouts: response.data}));

    }

    fetchFoods(){
        axios.get("http://localhost:3001/food")
            .then(response => this.setState({foods: response.data}));
    }

    render() {

        return (
            <div className={'flex ... p-6 background bg-gray-300 h-100'}>
                <div className="w-full p-4 max-w-med ">
                    <WorkoutList    workouts={this.state.workouts}
                                    fetchWorkouts={()=>this.fetchWorkouts()}
                    />
                </div>

                <div className="w-full p-6 max-w-med ">
                    <FoodList       foods={this.state.foods}
                                    fetchFoods={()=>this.fetchFoods()}

                    />
                </div>
            </div>
        );
    }
}

export default App;
