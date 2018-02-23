"use strict";

var React = require("react");
var createReactClass = require("create-react-class");

var Carousel = require("nuka-carousel");

const Myths2 = createReactClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    return (
      <Carousel>
        <img src="http://www.theamericanconservative.com/wp-content/uploads/2014/09/Israel-flag-sunset-554x394.jpg" />
        <img src="https://static.pexels.com/photos/5611/sky-blue-flag-poland.jpg" />
        <img src="http://www.expatgo.com/my/wp-content/uploads/2016/08/malaysia-flag-e1472699274689.jpg" />
        <img src="https://ae01.alicdn.com/kf/HTB1nAehLpXXXXcPXXXXq6xXFXXXD/New-Design-3-x5-Ft-National-Mexico-Flag-Mexican-Country-Flag-Polyester-Grommets.jpg_640x640.jpg" />
        <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/5/6/3/1/2271365-1-eng-GB/Merck-to-invest-68m-in-Italian-biopharma-production-site_wrbm_large.jpg" />
        <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/6/1/4/3194163-1-eng-GB/Argentina-to-increase-beef-exports-to-EU-once-FMD-linked-ban-is-lifted_wrbm_large.jpg" />
      </Carousel>
    );
  }
});

module.exports = Myths2
