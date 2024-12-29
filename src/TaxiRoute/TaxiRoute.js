import "./TaxiRoute.css";
import { useState, useEffect, useRef } from "react";

const TaxiRoute = () => {
    const [requirements, setRequirements] = useState([
        { name: "Перевозка домашнего животного", marker: "pet" },
        { name: "Перевозка собаки-повадыря", marker: "help-pet" },
        { name: "Буду с инвалидным креслом", marker: "wheelchair" },
        { name: "Общаюсь только текстом", marker: "text-talk" },
        { name: "Не говорю, но слышу", marker: "only-hear" },
    ]);

    const [showTopShadow, setShowTopShadow] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const { scrollTop} = contentRef.current;

                setShowTopShadow(scrollTop > 0); 
            }
        };

        if (contentRef.current) {
            contentRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="order">
            <div className={`route ${showTopShadow ? "shadow" : ""}`}>
                <div className="address">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fc5230" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="6" /></svg>
                    <input type="text" placeholder="Откуда?" />
                </div>
                <div className="address">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle"><circle cx="12" cy="12" r="6" /></svg>
                    <input type="text" placeholder="Куда?" />
                </div>
                <div className="add-address">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C4C2Be" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        <p>Добавить остановку</p>
                    </button>
                </div>
            </div>
            <div className="order-content" ref={contentRef}>
                <div className="payment-method">
                    <button>
                        <span>Способ оплаты</span>
                        <span>Наличные</span>
                    </button>
                </div>
                <div className="promo">
                    <button>
                        <span>Промокод</span>
                    </button>
                </div>
                <div className="commentary">
                    <input type="text" placeholder="Комментарий водителю..." />
                </div>
                <div className="order-for-other">
                    <button>
                        <span>Заказ другому человеку</span>
                    </button>
                </div>
                <div className="requirements">
                    {requirements.map((item) => (
                        <div key={item.marker}>
                            <span>{item.name}</span>
                            <label htmlFor={item.marker} className="switch-container">
                                <input type="checkbox" name={item.marker} id={item.marker} className="switch-input" />
                                <span className="switch-btn"></span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <div className="confirm">
                <button>Заказать</button>
            </div>
        </div>
    );
};

export default TaxiRoute;