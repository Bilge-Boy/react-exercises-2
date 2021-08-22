import React, { useEffect, useState } from 'react';
import './Hits.css';

function Hits() {
	const [hits, setHits] = useState([]);
	const [arr, setArr] = useState([]);



	useEffect(()=>{
		fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json")
		.then(response => response.json())
		.then(obj => setHits(obj));
	}, []);
	useEffect(()=>{
		setArr(hits.map(hit => hit.title));
	},[hits]);
	return (
		<div className="Hits">
			<h3>Hits:</h3>
			<p>
				Use the following API to make a list of hit titles:<br />
				<code>https://netcraft2.s3-eu-west-1.amazonaws.com/hits.json</code>
			</p>
			<ul>
				{arr.length ? arr.map((hit,i)=>
					<li key={i}>{hit}</li>
				) : ''}
			</ul>
		</div>
	)
}

export default Hits;
