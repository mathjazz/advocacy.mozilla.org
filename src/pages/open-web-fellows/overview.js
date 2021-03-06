var React = require(`react`);
var Footer = require(`../../components/footer.js`);
var Header = require(`../../components/header.js`);
var HeroUnit = require(`../../components/hero-unit.js`);
var FellowsHeader = require(`../../components/fellows-header.js`);
var ImageTag = require(`../../components/imagetag.js`);
var ContentContainer = require(`../../components/content-container.js`);

var Organization = React.createClass({
  render: function() {
    return (
      <div className="organization">
        <a href={this.props.linkLocation}>
          <img className="organization-image" width={this.props.width} height={this.props.height} src={this.props.imgSrc}/>
          <div className="organization-label"><i className="fa fa-map-marker"></i>{this.props.linkTitle}</div>
        </a>
      </div>
    );
  }
});

module.exports = React.createClass({
  render: function() {
    return (
      <div className="overview-page">
        <Header/>
        <HeroUnit image="/assets/overview.jpg">
          <h1>Open Web Fellows Program</h1>
        </HeroUnit>
        <FellowsHeader/>
        <div className="page">
          <ContentContainer>
            <h2>About the Program</h2>
            <p>The Open Web Fellows program – a collaboration between the <a href="http://www.fordfoundation.org/">Ford Foundation</a> and Mozilla – is a 10-month fellowship program that brings together technology talent and civil society organizations from around the world to advance and protect the open internet.<br/>The program aims to:
            </p>
            <ul className="icon-list">
              <li className="icon-institution">Increase public awareness and understanding of internet policy issues</li>
              <li className="icon-trips">Support and enable career paths in the internet policy and advocacy sectors</li>
              <li className="icon-approve">Celebrate and nurture a vibrant network of internet advocacy organizations</li>
            </ul>
            <p>Fellows are makers and doers passionate about the open internet. They may bring specialities in data visualization, design, development, storytelling, research or policy analysis. While they may not have previous experience with internet advocacy, policy or activism, they are comfortable performing as technologists, experimenters and curious contributors to the open internet movement.</p>
            <p><a href="http://mozilla.github.io/content/open-web-fellows-report/#introduction">Read the report-out on Year 1 of the Fellowship</a></p>
          </ContentContainer>
          <ContentContainer>
            <h2>Expectations of Fellows</h2>
              <ul className="icon-list">
                <li className="icon-life">Champion the open Internet in collaboration with their fellowship cohort peers</li>
                <li className="icon-flag">Be an active contributor to the work, culture and mission of the host organization</li>
                <li className="icon-cubes">Participate in Mozilla-organized events, such as conferences, learning labs, and weekly calls, and community events (MozFest, etc.)</li>
                <li className="icon-communicate">Communicate and share openly their work on an ongoing basis (e.g., blog posts)</li>
                <li className="icon-time">Program Timeline: The 2016 fellowship year starts September 1st. Host organizations for 2017 will be selected this fall, and applications for 2017 fellows will open in early spring. </li>
              </ul>
          </ContentContainer>
          <ContentContainer>
            <h2>Host Organizations</h2>
            <p>Host organizations are leading policy and advocacy organizations dedicated to safeguarding the open internet. Learn about the 2016 host organizations and their <a href="https://blog.mozilla.org/netpolicy/2016/02/01/2016-open-web-fellows-program-host-organizations/" target="_blank">proposed projects</a>. Fellows will spend 10 months collaborating with a single host organization. 2016 host organizations include</p>
            <div className="organization-row">
              <Organization
                imgSrc="/assets/logo-cipit.svg"
                linkTitle="Nairobi, Kenya"
                width="155" height="80"
                linkLocation="https://www.cipit.org/"
              />
              <Organization
                imgSrc="/assets/logo-citizenlab.svg"
                linkTitle="Toronto, Canada"
                width="180" height="80"
                linkLocation="https://citizenlab.org/"
              />
              <Organization
                imgSrc="/assets/logo-colorofchange.svg"
                linkTitle="New York, NY"
                width="200" height="80"
                linkLocation="http://colorofchange.org/"
              />
              <Organization
                imgSrc="/assets/logo-datasociety.svg"
                linkTitle="New York, NY"
                width="180" height="80"
                linkLocation="http://www.datasociety.net/"
              />
              <Organization
                imgSrc="/assets/logo-derechos.svg"
                linkTitle="Santiago, Chile"
                width="155" height="80"
                linkLocation="https://www.derechosdigitales.org/"
              />
              <Organization
                imgSrc="/assets/logo-edri.svg"
                linkTitle="Brussels, Belgium"
                width="155" height="80"
                linkLocation="https://edri.org/"
              />
              <Organization
                imgSrc="/assets/logo-freedomofthepress.svg"
                linkTitle="San Francisco, CA"
                width="155" height="80"
                linkLocation="https://freedom.press/"
              />
              <Organization
                imgSrc="/assets/logo-privacyinternational.svg"
                linkTitle="London, UK"
                width="155" height="80"
                linkLocation="https://www.privacyinternational.org/"
              />
            </div>
          </ContentContainer>
          <ContentContainer>
            <h2>Stipend and Financial Benefits</h2>
            <p>The fellowships are designed to allow flexibility for both Fellows and their families.</p>
            <ul className="icon-list">
            <li className="icon-stipend"><span>The standard fellowship offers a stipend of $60,000 USD<sup><a href="#disclaimer">*</a></sup>, paid in 10 monthly installments. Fellows are responsible for remitting all applicable taxes and other government payments as required.</span></li>
            <li className="icon-insurance">To help offset cost of living, the fellowship also provides supplements for childcare and health insurance, and helps pay for research/equipment and books.</li>
            <li className="icon-travel">The fellowship also covers the costs of required travel for fellowship activities.</li>
            </ul>
            <p id="disclaimer"><sup>*</sup>Proposed fellowship amounts are gross amounts and may be reduced by applicable taxes in the various applicable jurisdictions.</p>
          </ContentContainer>
          <ContentContainer className="grey">
            <div className="ford-logo">
              <div>
                <ImageTag height={50} width={198} alt="ford logo" src1x="/assets/logo-ford.svg"/>
              </div>
              <div className="ford-logo-container">
                <div className="supported-by">SUPPORTED BY</div>
                <p>The Ford Foundation works around the world on the frontlines of social change to fight inequality, strengthen democratic values, reduce poverty and injustice, and advance human achievement. Learn more at <a href="https://www.fordfoundation.org/">FordFoundation.org</a></p>
              </div>
            </div>
          </ContentContainer>
        </div>
        <Footer/>
      </div>
    );
  }
});
