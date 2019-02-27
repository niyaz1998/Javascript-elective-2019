import React from "react"
import axios from 'axios'
import List from '@material-ui/core/List'

export class CharactersList extends React.Component {

    state = {
        searchQuery: ''
    };

    componentDidMount() {
        this.loadExcursions()
    }

    loadExcursions = (name = '') => {
        axios({
            method: 'get',
            url: '/excursions',
            data: {
                name: name,
                password: password
            }
        }).then((response) => {
            console.log(response.data);
        }).catch((e) => {
            console.log(e);
        }).then(() => {

        });
    };

    render() {
        console.log(window.location.search.split('=')[1]);
        if (!this.state.characters) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <AppBar/>
                <Grid container spacing={16}>
                    {this.state.characters.map((character, idx) =>
                        <CharacterCard key={character.id} character={character}/>
                    )}
                </Grid>
            </div>
        )
    };
}
