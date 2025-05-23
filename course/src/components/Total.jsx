const Total = ({parts}) => {
    let sum = 0
    parts.forEach(p => sum += p.exercises)
    return (
        <p>
            <b>Total of {sum} exercises</b>
        </p>
    )
}

export default Total