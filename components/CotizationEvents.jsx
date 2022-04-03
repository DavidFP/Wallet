import { useState, useEffect } from "react/cjs/react.production.min";
import faker, { Faker } from "@faker-js/faker";
import Event from "./Event";


export default function CotizationEvents(...props) {

    // const [data, setData] = useState(null);

    // const fakeData = {
    //     type: faker.datatype.boolean() ? 'received' : 'sent',
    //     date: faker.date.past(),
    //     dogeAmount: faker.finance.amount(1,2500,2,'D'),
    //     dollarAmount: faker.finance.amount(1,5000,2,'$')
    // }

    // useEffect(() =>{
    //     setData(fakeData);
    // });


    return (<>
        {[...Array(10)].map((x,i)=>
            <Event 
            type={Math.random()<=0.5 ? 'received' : 'sent'}
            date={faker.date.recent()}
            dogeAmount={faker.finance.amount(1,2500,2,'D')}
            dollarAmount={faker.finance.amount(1,5000,2,'$')}
            />
        )}
    </>);
}