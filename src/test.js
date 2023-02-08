import React, { useState } from 'react';

const CalorieCalculator = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [age, setAge] = useState(0);
    const [activityLevel, setActivityLevel] = useState(1.2);
    const [fatIntake, setFatIntake] = useState(0);
    const [carbIntake, setCarbIntake] = useState(0);
    const [proteinIntake, setProteinIntake] = useState(0);
    const [result, setResult] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const BMR = 10 * weight + 6.25 * height - 5 * age + 5;
        const TDEE = BMR * activityLevel;
        const calories = TDEE + (fatIntake * 9) + (carbIntake * 4) + (proteinIntake * 4);
        setResult(calories);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="weight">Weight (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age (years):</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="activityLevel">Activity Level:</label>
                    <select
                        id="activityLevel"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                    >
                        <option value={1.2}>Sedentary (little or no exercise)</option>
                        <option value={1.375}>Lightly active (light exercise 1-3 days/week)</option>
                        <option value={1.55}>Moderately active (moderate exercise 3-5 days/week)</option>
                        <option value={1.725}>Very active (hard exercise 6-7 days/week)</option>
                        <option value={1.9}>Extremely active (very hard exercise, heavy manual labor, and/or sports 7 days/week)</option>
                    </select>
                </div>
                {/*<div>*/}
                {/*    <label htmlFor="fatIntake">Fat Intake (g):</label>*/}
                {/*    <input*/}
                {/*        type="number"*/}
                {/*        id="fat"/>*/}
                {/*    <button type="submit">Calculate</button>*/}
                {/*</div>*/}
                <div>
                    <label>Fat (g):</label>
                    <input type="number" value={fatIntake} onChange={(e) => setFatIntake(e.target.value)} />
                </div>
                <div>
                    <label>Carbohydrates (g):</label>
                    <input type="number" value={carbIntake} onChange={(e) => setCarbIntake(e.target.value)} />
                </div>
                <div>
                    <label>Protein (g):</label>
                    <input type="number" value={proteinIntake} onChange={(e) => setProteinIntake(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Calculate Total Calories</button>
                <div>
                    <label>Total Calories:</label>
                    <span>{result}</span>
                </div>

            </form>x
            <div>
                <h3>Result:</h3>
                <p>{result} calories per day</p>
            </div>
        </div>
    )
}

export default CalorieCalculator