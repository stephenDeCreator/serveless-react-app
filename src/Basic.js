import { useEffect, useState } from 'react';
import axios from 'axios';

const url = 'https://serverlessapi.netlify.app/api/basic-api';

const Basic = () => {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		try {
			const { data } = await axios.get(url);
			setProducts(data);
		} catch (error) {}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<section className="section section-center">
			<div className="title">
				<h2>basic setup</h2>
				<div className="underline"></div>
			</div>
			<div className="products">
				{products.map((product) => {
					const {
						name,
						id,
						price,
						image: { url }
					} = product;
					return (
						<article key={id} className="product">
							<img src={url} alt={name} />
							<div className="info">
								<h5>{name}</h5>
								<h5 className="price">${price}</h5>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Basic;
