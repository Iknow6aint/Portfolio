import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-20">
                    My name is Saint Moses Agbukor I am from Edo state Nigeria.
                    I am a software developer that has a strong passion for technology and a different kind of mindset from others.
                    As a developer i am currently working as a freelancer  with over 2 years of software development.
                </p>

                <br />

                <p className="text-xl">
                    I am enthusiastic about life, a good learner and someone that can work alone
                    and along side  other developers. I have other good communication skills and the ability
                    to earn the respect  and build good relationships with people.
                </p>
            </div>
        </div>
    );
};

export default About;
