import React, {Component} from 'react'
import {Utils} from '../utils/utils'
import '../style/images.css'

// const json = require('../utils/unsplashJSON_example.json')
export default class Images extends Component {
    state = {
        location: [],
        imageArray: [],
    }

    componentDidMount() {
        if (localStorage.getItem('location')) {
            const localData = JSON.parse(localStorage.getItem('location'))
            if (localData[0] !== this.state.location) {
                this.setState({location: localData[0]}, () => {
                    let url = Utils.unsplashRandomPics(
                        `${this.state.location.city} ${this.state.location.state}`, 9, 300, 300)
                    fetch(url, {method: 'GET', timeout: 3000}).then(response => {
                        if (response.ok)
                            return response.json()
                        else
                            throw new Error('Bad response from Unsplash server')
                    }).then(data => {
                        let pictures = data.map((pic, index) => {
                            return (
                                <div key={index}>
                                    <a href={pic.urls.full} target={'_blank'}>
                                        <img src={pic.urls.custom} className={'us-image'} alt={`city${index}`}/>
                                    </a>
                                </div>
                            )
                        })
                        this.setState({imageArray: pictures})
                    })
                })
            }
        }
    }

    render() {
        return (
            <div className={'image-grid'}>
                {this.state.imageArray}
            </div>
        )
    }
}
