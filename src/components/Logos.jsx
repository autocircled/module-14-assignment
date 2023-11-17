import { useEffect, useState } from "react"
import { getJsonData } from "../apiRequests/apiRequest"

const Logos = () => {
    const [logoList, setLogoList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await getJsonData('logos.json');
                setLogoList(data['data']);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [])
    return (
        <section className='logos bg-white py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex flex-wrap flex-row justify-content-center justify-content-md-between align-items-center gap-5">
                        {logoList.map((logo, index) => (
                            <img key={index.toString()} src={logo['logo']} width={100} alt={logo['title']} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Logos
