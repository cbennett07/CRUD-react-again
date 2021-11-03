import {Component} from "react";
import axios from "axios";

class Food extends Component {
    constructor(props){
        super(props);
        this.state={
            food: this.props.food,
            id: this.props.food.id,
            name: this.props.food.name,
            calories: this.props.food.calories,
            carb: this.props.food.carb,
            fat: this.props.food.fat,
            protein: this.props.food.protein,

        };
    }

    handleOnChangeFoodName(e){
        this.setState({name: e.target.value},()=>{});
    }

    handleOnChangeCalories(e){
        this.setState({calories: e.target.value}, ()=>{});
    }

    handleOnChangeFat(e){
        this.setState({fat: e.target.value}, ()=>{});
    }
    handleOnChangeCarb(e){
        this.setState({carb: e.target.value}, ()=>{});
    }
    handleOnChangeProtein(e){
        this.setState({protein: e.target.value}, ()=>{});
    }
    handleDeleteClicked(){
        //console.log("deleted food: " + this.state.id,()=>{})
        axios.delete("http://localhost:3001/food/" + this.state.id, () => {})
            .then(()=>this.props.fetchFoods())
    }


    handleSubmitClicked(){
        const patchVar = {
            name: this.state.name,
            calories:  Number.parseInt(this.state.calories),
            fat: Number.parseInt(this.state.fat),
            carb: Number.parseInt(this.state.carb),
            protein: Number.parseInt(this.state.protein),

        }
        //console.log(patchVar);
        axios.patch("http://localhost:3001/food/" + this.state.id, patchVar)
            .then(()=>this.props.fetchFoods());
    }


    render(){
        return(
            <div className={'rounded-lg p-2 border-2 shadow-lg border-gray-700 p-1 m-1 bg-white'} align={"left"}>
                <div>
                    <label  className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor={"txtFood" + this.state.id} >Food Name: </label>
                    <input className={'shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                           id={"txtFood" + this.state.id}
                           type={"text"} value={this.state.name}
                           onChange={(e)=>{this.handleOnChangeFoodName(e)}}
                    />
                </div>
                <div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'
                               htmlFor={"txtCalFood" + this.state.id} >Calories: </label>
                        <input className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                               id={"txtCalFood" + this.state.id}
                               type={"text"} value={this.state.calories}
                               onChange={(e)=>{this.handleOnChangeCalories(e)}}
                        />
                    </div>
                </div>
                <div><label className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor={"txtFat" + this.state.id} >Fat (calories): </label>
                    <input  className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                            size="5"
                            id={"txtFat" + this.state.id}
                            type={"text"}
                            value={this.state.fat}
                            onChange={(e)=>{this.handleOnChangeFat(e)}}

                    /></div>
                <div>
                    <label className='block text-gray-700 text-sm font-bold mb-2'
                           htmlFor={"txtCarb" + this.state.id} >Carb (calories): </label>
                    <input className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                           size="5"
                           id={"txtCarb" + this.state.id}
                           type={"text"}
                           value={this.state.carb}
                           onChange={(e)=>{this.handleOnChangeCarb(e)}}

                    /></div>

                <div><label className='block text-gray-700 text-sm font-bold mb-2'
                            htmlFor={"txtPro" + this.state.id} >Protein (calories): </label>
                    <input  className={'shadow appearance-none border border-blue-500 rounded w-20 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'}
                            size="5"
                            id={"txtPro" + this.state.id}
                            type={"text"}
                            value={this.state.protein}
                            onChange={(e)=>{this.handleOnChangeProtein(e)}}

                    /></div>
                <div className="m-2">
                    <button onClick={()=>(this.handleSubmitClicked())}
                            className={'bg-blue-500 rounded hover:bg-blue-700 text-white w-20 shadow-md p-1'}
                    >Update</button>
                </div>
                <div className="m-2">
                    <button onClick={()=>(this.handleDeleteClicked())}
                            className={'bg-blue-500 rounded hover:bg-blue-700 text-white w-20 shadow-md p-1'}
                    >Delete</button>

                </div>
            </div>
        )

    }
}
export default Food;