import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


export default class Main extends Component{

    // sempre utilizar este padrao
    // sempre que uma variavel de state for alterada, o metodo render sera executado
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }


    // é executado assim que o component for exibido em tela
    componentDidMount(){
        this.loadProducts();
    }

    // quando não for um metodo do react, precisa ser em formato de arrow function
    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page=${page}`);
        
        const {docs, ...productInfo} = response.data;

        //this.setState({ products: response.data.docs });
        this.setState({ products: docs, productInfo, page });

        //console.log(response);
        //console.log(response.data.docs);
    };

    prevPage = () => {
        const {page, productInfo} = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    };
    
    nextPage = () => {
        const {page, productInfo} = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page+1;
        this.loadProducts(pageNumber);
    };

    render(){
        //return <h1>Hello, rocketseat!</h1>
        //return <h1>Contagem de produtos: { this.state.products.length }</h1>

        const { products, page, productInfo } = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    // <h2 key={product._id}>{product.title}</h2>

                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>

                    </article>

                ))}

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button  disabled={page === productInfo.pages} onClick={this.nextPage}>Próxima</button> 
                </div>
            </div>
        )        
    }
}