import React from 'react';

const MenuCard = ({ menuData }) => {
    console.log(menuData);
    return (
        <>
            <section className="main-card-container">
                {menuData.map((currEle) => {
                    const { id, name, category, price, description } = currEle;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-number">{id}</div>
                                        <div className="card-author subtle">
                                            {category}
                                        </div>
                                        <div className="card-title">{name}</div>
                                        <div className="card-price">
                                            {price}
                                        </div>
                                        <div className="card-description subtle">
                                            {description}
                                        </div>
                                        <div className="card-read">
                                            Read more...
                                        </div>
                                        {/* <img src="" alt="maggi" /> */}
                                        <div className="card-tag subtle">
                                            Order Now!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </section>
        </>
    );
};

export default MenuCard;
