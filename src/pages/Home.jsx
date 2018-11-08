
import React, { Component } from 'react';
import NavBar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx"
import Jumbotron from "../components/Jumbotron.jsx"
import Jumbotron1 from "../components/Jumbotron1.jsx"
import Jumbotron0 from "../components/Jumbotron0.jsx"
import "./Home.css"
class Home extends Component {
  render(){
    return(
      <div className="home" >
      <NavBar />
      <Jumbotron title="Welcome, to my website" subtitle="l o f i   a n d   c h i l l"/>
      <div className="container">
        <h2>Welcome</h2>
        <p>Hi, My name is Satwato Dey. And this website is stile in progress. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum justo, ullamcorper in mi quis, vehicula laoreet sapien. Aliquam dignissim massa ut porttitor gravida. Nulla vehicula nisl ut ligula tristique, eget viverra arcu ultricies. Donec elementum tortor in arcu finibus, sed malesuada nibh feugiat. Vestibulum sit amet nisl ultricies, pretium nisl a, faucibus massa. Integer est ligula, lacinia eu porta eget, blandit non purus. Nullam sit amet tellus convallis, aliquam erat et, commodo quam. Praesent sodales felis vel risus tincidunt eleifend. Pellentesque purus mi, consectetur at blandit id, vestibulum in ligula. Morbi commodo volutpat odio quis sodales. Cras quis diam nec eros dictum feugiat pulvinar et leo. Suspendisse euismod cursus orci eget eleifend. Sed varius diam eu massa ultrices ultricies. Aenean posuere eget metus eu convallis. Mauris consectetur nulla at nibh rutrum venenatis nec at tortor. Suspendisse viverra urna hendrerit pretium venenatis.
        </p>
        </div>
        <Jumbotron1 />
        <div className="container" >
        <p>Mauris feugiat eros at convallis volutpat. Aliquam rhoncus eget metus eget aliquet. Praesent venenatis dui vel quam tempus eleifend. Integer vel sollicitudin sem. Proin blandit tortor et arcu convallis porttitor. Donec bibendum sagittis turpis hendrerit congue. Nulla mauris arcu, vulputate et orci id, pulvinar venenatis velit. Nunc ac sapien nec risus mollis egestas at et libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sed dolor lacus. Cras non commodo justo. Donec finibus eget enim in vestibulum. Nulla vel lectus euismod, malesuada erat vel, sollicitudin augue. Nullam pulvinar vestibulum eros id bibendum. Sed felis sapien, tempus quis ullamcorper sed, dignissim eu lectus. In in lorem eget urna bibendum pharetra.</p>
        </div>
        <Jumbotron0 title="v a p o r w a v e" subtitle="l o f i  a n d  c h i l l"/>
        <Footer />
      </div>
    );
  }
}
export default Home
