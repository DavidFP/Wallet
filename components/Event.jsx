import {BsFillArrowUpCircleFill as Up ,BsFillArrowDownCircleFill as Down} from 'react-icons/bs'

export default function Event(props) {

    const { type, date, dogeAmount, dollarAmount } = props;

    return (<>
            <div className="text-Uppercase">{date.toTimeString()}</div>

            <div className={type==="received"?'row alert alert-info':'row alert alert-warning'}>
                <div className="col-1">
                    {type === "received" ? <Down/> : <Up/>}
                </div>
                
                <div className="col">
                    {type === "received"
                        ? 'Recibido a las ' + date.toTimeString()
                        : 'Enviado  a las ' + date.toTimeString()}
                </div>
                <div className="col-2">
                    {dogeAmount} ~ {dollarAmount}
                </div>
            </div>
       
    </>);
}