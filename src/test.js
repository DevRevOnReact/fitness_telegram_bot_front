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
    const [gender, setGender] = useState('male');
    const handleSubmit = (e) => {
        e.preventDefault();
        const BMR = gender === 'male'
            ? 10 * weight + 6.25 * height - 5 * age + 5
            : 10 * weight + 6.25 * height - 5 * age - 161;
        const TDEE = BMR * activityLevel;
        const calories = TDEE + (fatIntake * 9) + (carbIntake * 4) + (proteinIntake * 4);
        setResult(calories);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="gender">Пол:</label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="weight">Вес (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="height">Рост (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="age">Возраст (years):</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="activityLevel">Уровень активности:</label>
                    <select
                        id="activityLevel"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                    >
                        <option value={1.2}>Малоподвижный образ жизни (мало физических упражнений или их отсутствие)</option>
                        <option value={1.375}>Легкая активность (легкие упражнения 1-3 дня в неделю)</option>
                        <option value={1.55}>Умеренно активный (умеренные физические нагрузки 3-5 дней в неделю)</option>
                        <option value={1.725}>Очень активный (интенсивные упражнения 6-7 дней в неделю)</option>
                        <option value={1.9}>Чрезвычайно активный (очень тяжелые физические упражнения, тяжелый физический труд и/или занятия спортом 7 дней в неделю)</option>
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
                    <label>Жир (g):</label>
                    <input type="number" value={fatIntake} onChange={(e) => setFatIntake(e.target.value)} />
                </div>
                <div>
                    <label>Углеводы (g):</label>
                    <input type="number" value={carbIntake} onChange={(e) => setCarbIntake(e.target.value)} />
                </div>
                <div>
                    <label>Протеины (g):</label>
                    <input type="number" value={proteinIntake} onChange={(e) => setProteinIntake(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Calculate Total Calories</button>
                <div>
                    <label>Сумма каллорий:</label>
                    <span>{result}</span>
                </div>

            </form>x
            <div>
                <h3>Result:</h3>
                <p>{result} Сколько нужно потреблять каллорий в день</p>
            </div>
        </div>
    )
}

export default CalorieCalculator