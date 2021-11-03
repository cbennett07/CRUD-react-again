import Food  from "./Food";

const FoodList = (props)=>{
    let total=0;
    const FoodList = props.foods.map(food =>{
        total += food.calories;
      return <Food  key={food.id}
                    food={food}
                    fetchFoods={()=>props.fetchFoods()}
      />
    })
    return(<div align={'middle'} className={''}>Foods
            <div className='shadow-md rounded-2xl px-8 pt-6 pb-8 mb-0 bg-gray-500 text-white rounded-b-none'>
                {FoodList}
            </div>
            <div className='text-red-500 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 bg-gray-900 text-white rounded-t-none'>
                Total calories consumed:<br /> {total}
            </div>
        </div>
        )
}
export default FoodList;
