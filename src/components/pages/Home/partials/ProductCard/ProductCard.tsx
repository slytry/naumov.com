import { useProducts } from "lib/api";
import Image from "next/image";




export  function ProductCard() {

	const {data} = useProducts();


	return (
		<li data-component="" className="smol-card-component">
    <h3>Card Headline 2</h3>
    <Image src="" alt=""/>
    <p>Chocolate cake macaroon tootsie roll pastry gummies.</p>
  </li>
	)
}
