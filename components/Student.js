import Score from "./Score"

export default function Student(props) {

    return (
        <>
            {props.student.map(item => {
                return (
                    <div>
                        <p>Name: {item.name}</p>
                        <p>Bio: {item.bio}</p>
                        {item.scores.map((score) => ( // this .map is so i can map through the scores array
                            <Score score={score.score} date={score.date} />
                        ))}
                    </div>
                )
            })}
        </>
    )

}