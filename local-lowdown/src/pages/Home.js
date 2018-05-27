import React, {Component} from 'react'
import {Utils} from '../utils/utils'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Search from '../components/Search'


import '../style/home.css'

export default class Home extends Component {
    state = {
        searchHome: ''
    }

    componentDidMount() {
        let randomImage = Utils.unsplashRandomPics('america', 1, null, null)
        console.log(randomImage)

        fetch(randomImage, {method: 'GET', timeout: '3000'}).then(response => {
            if (response.ok)
                return response.json()
            else
                throw new Error('bad response from Unsplash server')
        }).then(data => {
            let source = data[0].urls.regular
            let credit = `${data[0].user.name}`
            this.setState({
                searchHome: (
                    <div style={{
                        backgroundImage: `url(${source})`,
                        backgroundSize: 'cover cover no-repeat',
                        background: `url(${source}) center cover no-repeat`,
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                        <Search thisClass={'search-home'}/>
                    </div>
                )
            })
        })
    }

    render() {
        return (
            <div>
                <Header />
                {this.state.searchHome}
                <Footer />
            </div>
        )
    }
}
