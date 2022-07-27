import React, {useState, useEffect} from 'react';

function Subscriptions() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [filtereData, setFilteredData] = useState([]);
    const [display, setDisplay] = useState(true);
    const [plans, setPlans] = useState([]);

    useEffect( () => {
        fetchAll();
    }, []);

    const fetchAll = async () => {
        const data = await fetch('/search');
        const result = await data.json();
        setSubscriptions(result);
    };

    const searchSubscriptions = async (event) => {
        let value = event.toLowerCase();
        let result = [];

        if (value === '') {
            result = [];
            setDisplay(false);
        } else {
            setDisplay(true);

            result = subscriptions.filter(data => {
                return data.name.toLowerCase().includes(value);
            });
        }

        setFilteredData(result);
    };

    const getSubscriptionData = (event) => {
        let result = [];

        if (event > 0) {
            result = subscriptions.find(data => data.id === event);
        }

        setPlans(Array(result));
        setDisplay(Prev => {return !Prev});
    };

    return(
        <>
            <div class="form-row">
                <div class="col-md-12">
                    <label>Search</label>
                    <input type="text" class="form-control" placeholder="Netflix, Hulu, etc." onChange={event => searchSubscriptions(event.target.value)} />
                    <ul id="suggestions" class={(display === false) ? "invisible" : "visible"}>
                        {
                            filtereData.map(item => {
                                return(<li onClick={event => getSubscriptionData(event.target.value)} value={item.id}>{item.name}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>

            <div class="container-fluid">
                <h2>Plans</h2>
                <div class="row">
                    {
                        plans.map( (item, index) => {
                            return(<>
                                <div class="col">{item.name}</div>
                                <div class="col">{item.plans[index].Basic}</div>
                            </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Subscriptions;