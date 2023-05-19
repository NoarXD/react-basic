import { useContext } from "react"
import DataContext from "../Data/DataContext"

const Report = ()=>{
    const report = useContext(DataContext)
    return (
        <>
            <p>รายรับ : {report.income}</p>
            <p>รายจ่าย : {report.expense}</p>
        </>
    )
}

export default Report