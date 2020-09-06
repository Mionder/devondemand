import React, { Component } from 'react';
import Layout from '../components/Layout/layout.js';
import Accordion from '../components/Accordion/accordion.js';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import database from '../database/database.json';

import '../styles/faqs.css';

export default class FAQs extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }

  scrollTo = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  renderSidebar = () => {
    const { faqs } = database; 

    return faqs.map((item, index) => {
      return (
        <li className="sidebar_list_item" key={item.theme}>
          <Link activeClass="active" className={`item${index}`} to={`item${index}`} spy={true} smooth={true} duration={500} >{item.theme}</Link>
        </li>
      )
    })
  }

  renderQuestions = () => {
    const { faqs } = database; 

    return faqs.map((item, index) => {
      return (
        <Element name={`item${index}`} className="faqs_list_item element" key={item.theme}>
          <div className="list_title">
            {`${index+1}. ${item.theme}`}
          </div>
          <div className="list_accordion">
            <Accordion questions={item.questions}/>
          </div>
        </Element>
      )
    })
  }

  render() {
    return (
      <Layout>
        <section className="faqs">
          <div className="container">
            <div className="faqs_wrapper">
              <div className="faqs_sidebar">
                <nav>
                  <ul className="sidebar_list">
                    {this.renderSidebar()}
                  </ul>
                </nav>
              </div>
              <div className="faqs_main">
                <h2 className="faqs_title">Questions? Look here.</h2>
                <p className="faqs_subtitle">Can’t find an answer? Email devondemandco@gmail.com</p>
                <div className="faqs_list">
                  {this.renderQuestions()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
