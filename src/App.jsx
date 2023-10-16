import React from 'react';
import Button from './components/Button';
import MiBoton from './components/MiBoton';
import Post from './components/Post';
import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';
import PostFooter from './components/PostFooter';

// Function Component
/*
const App = () => {
    return <h1 className="">Hola desde React con Webpack 5</h1>
}
*/

// Class Component
class App extends React.Component {
    render() {
        let style = { border: '1px solid red', boxShadow: '2px 1px 5px black' };
        return (
            <>
                <h1 className="" style={style}>Hola desde React con Webpack 5</h1>
                {/* 
                <Button text={"Click"} className={"boton"} />
                <MiBoton /> 
                */}
                <Post className="mx-auto w-50">
                    <PostHeader>
                        <h1>Titulo 1</h1>
                        <h5>Subtitulo 1</h5>
                    </PostHeader>
                    <PostBody>
                        <img src="https://picsum.photos/500/500" alt="" />
                    </PostBody>
                    <PostFooter>

                    </PostFooter>
                </Post>

                <Post>
                    <PostBody>

                    </PostBody>
                    <PostFooter>

                    </PostFooter>
                </Post>
            </>
        )
    }
}



export default App;