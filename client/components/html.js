import React, {Component} from 'react'
// import {connect} from 'react-router'
import text from './test'

class Html extends Component {
  constructor() {
    super()
    this.state = {
      class: ''
    }
    //this.createMarkup = this.createMarkup.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.isActive = this.isActive.bind(this)
    this.getTagName = this.getTagName.bind(this)
  }

  // createMarkup() {
  //   return {
  //     __html: `
  //     <div id="app"></div>
  //   `
  //   }
  // }

  //&amp; → & (ampersand, U+0026)
  // &lt; → < (less-than sign, U+003C)
  // &gt; → > (greater-than sign, U+003E)
  // &quot; → " (quotation mark, U+0022)
  // &apos; → ' (apostrophe, U+0027)
  handleClick(evt) {
    console.log('HIIII')
    console.log(evt.target.getAttribute('name'))
    this.setState({class: evt.target.getAttribute('name')})
  }
  isActive(str) {
    return this.state.class === str
  }
  getTagName(str) {
    if (str[1] === '/') {
      return str.slice(2, str.length - 1)
    } else {
      const a = str.indexOf('>')
      const b = str.indexOf('/')
      const c = str.indexOf(' ')
      const arr = [a, b, c]
      const filtered = arr.filter(n => n > 0)
      console.log(filtered)
      const idx = Math.min(...filtered)
      console.log(idx)
      return str.slice(1, idx)
    }
  }
  render() {
    const html = `<html lang="en">
    <head>
        <title>The New York Times: Digital and Home Delivery Subscriptions</title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">

        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta content="MOPS" name="sourceApp">
        <meta content="Subscribe to The New York Times" property="og:title">
        <meta content="nytimes.com/subscribenyt" property="og:site_name">
        <meta content="https://static01.nyt.com/subscriptions/components/img/devices/Device.png" property="og:image">
        <meta content="product" property="og:type">
        <meta content="https://www.nytimes.com/subscriptions/Multiproduct/lp8HYKU.html" property="og:url">
        <meta content="Discover the value of independent Times journalism today. Choose annual billing and save up to 40% every year." property="og:description">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <link href="https://www.nytimes.com/subscriptions/Multiproduct/lp3KYXU.html" rel="canonical">


        <!-- <script type="text/javascript" src="https://static01.nyt.com/video/vhs/vhs-2.x.min.js"></script> -->
        <!-- <script type="text/javascript" src="https://static01.nyt.com/subscriptions/components/js/jquery.bxslider.min.js"></script> -->
        <script src="//static01.nyt.com/subscriptions/components/js/html5shiv.js"></script>

        <!-- <link id="legacy-zam5nzz" rel="stylesheet" type="text/css" href="https://typeface.nyt.com/css/zam5nzz.css" media="all" /> -->
        <!-- <link href="https://static01.nyt.com/subscriptions/components/css/jquery.bxslider.css" media="all" type="text/css" rel="stylesheet"/> -->

        <link rel="stylesheet" href="sublp/css/main-styles.css" type="text/css"/>
        <link rel="stylesheet" href="sublp/css/nav.css" type="text/css"/>
        <link rel="stylesheet" href="sublp/css/cpb.css" type="text/css"/>
        <link rel="stylesheet" href="css/src/style_sublp.css" type="text/css"/>

        <!-- NYTimes typekit -->
        <script src="//typeface.nytimes.com/zam5nzz.js"></script>
        <script>
            try {
                Typekit.load();
            } catch (e) {
            }
        </script>

        <script defer src="https://a1.nyt.com/analytics/json-kidd-no-ender.min.js"></script>
        <script src="https://cdn.optimizely.com/public/3013110282/s/landing_prod.js"></script>
    </head>
    <body class="external">
        <div class="wrapper">

            <nav class="nav_bar">

                <!--  DOM element start here -->

                <a class="logo" href="https://www.nytimes.com">
                    <!--  <img src="../components/img/logos/logo_nyt_white.svg" width="200" class="nyt_logo"/> -->
                    <span class="nyt_logo"> <svg height="26px" width="204px" class="icon-image"><use xlink:href="#icon-nytlogo-svg"/></svg> </span> <!-- END of nyt_logo -->
                    <span class="t_logo">
                        <img src="https://static01.nyt.com/subscriptions/Multiproduct/assets_pa2017/images/Super-T.svg" width="20" height="26" alt="The New York Times">
                    </span> <!-- END of nyt_logo -->
                </a><!-- END of logo -->

                <div class="nav_links desker">
                    <!-- <a class="link_why needCID" href="https://www.nytimes.com/subscriptions/Multiproduct/lp8FW9H.html">Why The Times?</a>
                    <a class="link_what needCID" href="https://www.nytimes.com/subscriptions/Multiproduct/lp3L3W6.html">What You Get</a>
                    <a class="activepage link_sub" href="javascript:void(0)" >Subscribe</a> -->
                    <a href="https://myaccount.nytimes.com/auth/login?URI=https://www.nytimes.com" id="login_dig">Log in</a>
                </div><!-- END xof nav_links -->
            </nav>



            <section class="thank_you">
                <div class="thank_you_statement">
                    <h1>Thank you for being a subscriber.</h1>
                    <h3>Our readers are at the center of everything we do. <span class="wrap_big">Thank you for your loyalty to our mission.</span></h3>
                </div>

                <div class="actions">
                    <div class="option option_one">

                        <i class="option_icon plan_icon">
                            <svg width="106" height="65"><use xlink:href="#icon-plan-svg"/></svg>
                        </i>
                        <h3>Update your subscription</h3>
                        <p>Learn about subscriber benefits for our digital and home delivery options.</p>
                        <a class="thank_you_cta" href="#bundles">SEE OPTIONS</a>
                    </div><!--
                    --><div class="option option_two">`

    const arr = html
      .split('<')
      .map(e => {
        return `<${e}`
      })
      .slice(1)

    return (
      <div>
        {/* <div dangerouslySetInnerHTML={{__html: '&lth1&gtHello World</h1>'}} /> */}
        <div>
          <pre>
            <code>
              <h1 name="name" onClick={this.handleClick}>
                My name is Claire
              </h1>
            </code>
          </pre>
          {arr.map((e, i) => {
            let idx = e.indexOf('>')
            let classname = this.getTagName(e)
            return (
              <div
                className={
                  this.isActive(classname) ? `${classname} active` : {classname}
                }
                onClick={this.handleClick}
                name={classname}
                key={i}
              >
                {e}
                <br />
              </div>
            )
          })}

          {/* <h1>{`<h1>`}</h1>
          {`Hello again`}
          <h1>{`</h1>`}</h1>
          <br />
          <div>{`<div>`}</div>
          {`hi hi`}
          <div>{`</div>`}</div> */}
        </div>
      </div>
    )
  }
}

export default Html
