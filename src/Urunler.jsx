import React from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

const veri = [
	{
		id: 0,
		kategori: "Anakart",
		urun: "MSI",
		fiyati: 5000,
		aciklama: "MSI anakart 3 adet DDRS slot vb..."
	},
	{
		id: 1,
		kategori: "Harddisk",
		urun: "Western Digital",
		fiyati: 2000,
		aciklama: "Western Digital 500GB..."
	},
	{
		id: 2,
		kategori: "Anakart3",
		urun: "MSI3",
		fiyati: 5003,
		aciklama: "MSI anakart 3 adet DDRS slot vb...3"
	},
	{
		id: 3,
		kategori: "Anakart4",
		urun: "MSI4",
		fiyati: 5004,
		aciklama: "MSI anakart 3 adet DDRS slot vb...4"
	},
]

function Urunler() {
	let { path, url } = useRouteMatch();

	return (
		<div className='container'>
			<div className="alert alert-primary" role="alert">
				<h3 className="text-center">Ürünler Sayfasına Hoşgeldiniz.</h3>
				<div className="container">
					<div className="row">{
						veri.map((linkler) => {
							return (
								<div className="col-md-6 mt-3">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">{linkler.kategori}</h5>
											<p className="card-text">{linkler.urun}</p>
											<Link className="btn btn-primary" to={`${url}/${linkler.id}`}>
												{/* Burada Sıfırdan Route oluşturuyor, gönderiyor. */}
												Detaya Git
											</Link>
										</div>
									</div>
								</div>
							)
						})
					}
					</div>
				</div>
			</div>
			<Switch>
				<Route path={path} exact></Route>
				<Route path={`${path}/:urunId`}><Urun /></Route>
			</Switch>
		</div>
	)
}

function Urun() {
	let { urunId } = useParams();
	let dizi = veri.filter((data) => {
		return data.id == urunId
	});
	return (
		<div>
			<div className="alert alert-primary" role="alert">
				<h3 style={{ color: "red" }}>
					Seçilen Ürün Bilgileri;
				</h3>
				<h3>
					Kategori : {dizi[0].kategori}
				</h3>
				<h3>
					Ürün : {dizi[0].urun}
				</h3>
				<h3>
					Açıklama : {dizi[0].aciklama}
				</h3>
			</div>
		</div>
	)
}
export default Urunler
