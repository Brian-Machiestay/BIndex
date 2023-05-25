import React from "react";
import img01 from '../assets/images/img01.png'

function Midsection () {
    return (
        <section className="mid-section">
            <div className="sec1"><img src={img01} alt="display bmi" />
            </div>
            <div className="sec2">
                <h2 className="sec2-title">What your BMI result means</h2>
                <p className="advice">
                    A BMI range of 18.5 to 24.9 is considered a 'healthy weight'. 
                    Maintaining a healthy weight may lower your chances of experiencing
                    health issues later on, such as obesity and type 2 diabetes. Aim for a 
                    nutritious diet with reduced fat and sugar content, incorporating ample 
                    fruits and vegetables. Additionally, strive for regular physical activity
                    ideally about 30 minutes daily for five days a week.
                </p>
            </div>
        </section>
    )
}

export default Midsection;