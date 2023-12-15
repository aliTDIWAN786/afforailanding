import React, { useState, useEffect } from 'react';
import styles from './landingpage.module.css';
import { Navbar, Button, Dropdown } from '../../components';
import { CheckCircle, FastForward, Power, SearchPlus } from '../../assets/svg';
import {
  Logo,
  Appsumo,
  Next,
  Landing1,
  UserIcons,
  Landing4,
  Check,
  Landing5,
  MobileLanding5,
  Landing6,
  MobileLanding6,
  Landing7,
  MobileLanding7,
  Landing8,
  MobileLanding8,
  Landing9,
  MobileLanding9,
  Landing10,
  MobileLanding10,
  MobileLanding11,
  Landing11,
  Landing14,
  Landing15,
  MobileLanding17,
  Landing17,
  MobileLanding19,
  Landing19,
  Landing18,
  MobileLanding18,
  Sputnikatx,
  Landing20,
  Landing13,
  MobileLanding13,
  Landing12,
  MobileLanding12,
}
  from '../../assets/images';

const featuresName = [
  'Summarize Key Findings',
  'Compare Between Documents',
  'Search For Answers',
  'Ask In Any Language'
]

const secodnBullets = [
  'A whip smart research assistant',
  'We speak every language',
  'Reliable data citation for answers',
  'Fort-Knox level data security'
]

const faq = [
  {
    que: `Is Afforai free?`,
    ans: `Yes, Afforai is free for all new users. Upon signing up, users are given 50 permanent credits`,
  },
  {
    que: `What are subscription credits versus permanent credits?`,
    ans: `Subscription credits come from monthly payments, while permanent credits come from top ups. Subscription credits will be used before permanent credits, and subscription credits expire every month while permanent credits stay.`,
  },
  {
    que: `Does Afforai support documents storing on the cloud like Google Drive, One Drive, or Drop Box?`,
    ans: `Currently Afforai only support uploading local documents and websites, in the near future we will integrate these cloud solutions. Sign up with us to get updated.`,
  },
  {
    que: `Does Afforai support uploading images and video?`,
    ans: `Currently Afforai supports OCR for scanned PDF, but not via image file directly. Afforai currently working on working with video and audio transcript.`,
  }, {
    que: `Does Afforai support collaboration between accounts?`,
    ans: `Currently Afforai is working on a solution to allow users to share chatbots and files. Sign up with us to get updated when this feature roll out.`,
  }, {
    que: 'Is my data secured?',
    ans: `Yes your data is secured with Afforai. We don't store your conversation with the AI, and the files you uploaded on the system is stored on the cloud using Microsoft Azure and MongoDB with their standard security. LLM calls are made using OpenAI Azure with their security measures.`,
  },
]

const modes = [
  {
    img: FastForward,
    title: 'Fast Mode (default)',
    subtitle: '1 credit',
    body: 'Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).'
  },
  {
    img: Power,
    title: 'Powerful Mode',
    subtitle: '4 credits',
    body: 'Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).'
  },
  {
    img: SearchPlus,
    title: 'Google Mode',
    subtitle: '5 credits',
    body: 'Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.'
  }
]

const LandingPage = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [islessScreen, setIslessScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIslessScreen(window.innerWidth <= 450);
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className={`d-flex flex-column align-items-center`}>
        <div className={`d-flex flex-column align-items-center container-fluid overflow-hidden`}>
          <div className={`${styles.my_t100} ${styles.appsumo} d-flex justify-content-start jsutify-content-lg-between align-items-center p-2 gap-2`}>
            <img src={Appsumo} alt="logo" className={``} />
            <small>Now on AppSumo</small>
            <a href="https://appsumo.8odi.net/3eR3xn" target='_blank' className={`d-flex align-items-center gap-2`}>
              <small>Get Lifetime Deal</small>
              <img src={Next} alt="next" />
            </a>
          </div>
          <div className={`${styles.heading} ${styles.start_text} my-4`}>
            Your second brain for maximizing productivity
          </div>
          <div className={`${styles.start_text} my-4`} >
            Afforai is an AI chatbot that searches, summarizes, and translates info from
            multiple sources to produce trustworthy research.
            Feed lengthy research documents to stacks of dry compliance requirements and
            extract the key findings you need.
          </div>
          <div className={`d-flex align-items-center gap-5  mb-4 ${styles.spin}`}>
            {
              featuresName.map((item, key) => {
                return <div className={`${styles.feature_item} d-flex align-items-center gap-1 py-1 px-2`} key={key}>
                  <img src={Check} alt="check" />
                  <span>{item}</span>
                </div>
              })
            }
          </div>
          <div className={`d-flex flex-md-row flex-column align-items-md-center justify-content-md-center w-100 gap-2 my-2`}>
            <Button>Try for free</Button>
            <Button style={{
              color: 'black',
              background: 'white',
              border: '1px solid lightgray',
              margin: '0 0 0 0'
            }}>
              View Pricing
            </Button>
          </div>
          <div className={`${styles.gradient} w-100`} style={{ height: '200px' }}>

          </div>
          <div className={`mt-5 ${styles.landing1}`}>
            <img src={Landing1} alt="landing1" />
          </div>
        </div>

        <div className={`container-fluid d-flex flex-column justify-content-center align-items-center gap-4 my-5`}>
          <span className={`${styles.txt_gray}`}>Loved by
            <span className={`${styles.txt_purple}`}> 20,000+ </span>
            users around the world
          </span>
          <img className={`${styles.user_icon}`} src={UserIcons} alt="" />
        </div>

        <div className={`container-fluid gap-4 mb-5 px-md-4 d-flex flex-md-row flex-column mx-auto justify-content-center align-items-center ${styles.my_t200}`}>
          <div className={`col-md-5 d-flex flex-column px-sm-4`}>
            <span className={`${styles.heading, styles.heading2}`}>
              Say goodbye to long, tiresome documents
            </span>
            <span className={`mt-5`}>
              Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
            </span>
            <div className={`d-flex flex-column mt-4`}>
              {
                secodnBullets.map((item, key) => {
                  return <div className={`d-flex align-items-center gap-2 my-2`} key={key}>
                    <img src={CheckCircle} alt="" />
                    <span style={{
                      color: 'rgb(3, 204, 59)',
                      fontWeight: '600',
                      fontSize: '17px'
                    }}>
                      {item}
                    </span>
                  </div>
                })
              }
            </div>
          </div>
          <div className={`col-md-5 ${styles.landing4}`}>
            <img src={Landing4} alt="landing4" />
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>


        <div className={`${styles.productivity} container-fluid w-100 d-flex flex-column align-items-md-center`}>
          <div className={`text-center py-1 px-4`}
            style={{
              color: 'rgb(127, 0, 255)',
              border: '2px solid rgb(127, 0, 255)',
              borderRadius: '10px',
              width: 'fit-content'
            }}
          >
            <small style={{ fontWeight: '500' }}>10x your productivity</small>
          </div>
          <div className={`${styles.heading, styles.productivity_heading} my-2`}>
            Save yourself from stress & streamline your workflow
          </div>
          <div className={`${styles.start_text, styles.productivity_text} text-center}`}>
            The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
          </div>
        </div>


        <div className={`container-fluid mt-2 ${styles.producitivity_img}`}>
          <img src={isMobile ? MobileLanding5 : Landing5} alt="landing5" className={`${styles.producitivity_image_img}`} />
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`mt-4 container p-2 ${styles.about_us}`}>
          <div className={`${styles.intro} w-100 d-flex flex-column align-items-center mb-3`}>
            <div className={`text-center py-1 px-4`}
              style={{
                color: 'rgb(127, 0, 255)',
                border: '2px solid rgb(127, 0, 255)',
                borderRadius: '10px',
                width: 'fit-content'
              }}
            >
              <small style={{ fontWeight: '500' }}>Why choose us?</small>
            </div>
            <div className={`${styles.heading} text-center my-2`}>
              Built for the user
            </div>
            <div className={`${styles.start_text} text-center`}>
              Afforai is where exceptional customer focus meets exceptional technology.
            </div>
          </div>

          <div className={`${styles.about_cards} d-flex flex-column w-100 p-1`}>
            <div className={`row d-flex flex-md-row flex-column gap-2 justify-content-md-center mt-2`}>
              <div className={`card col-md-5`}>
                <div className={`card-img-top`} style={{ height: '200px' }}>
                  <img src={isMobile ? MobileLanding6 : Landing6} alt="landing6"
                    style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid black' }}
                  />
                </div>
                <div className={`card-body`}>
                  <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                    Cross Language Querying
                  </div>
                  <div className={`card-text`}>Afforai is able to translate your documents to more than 100 languages, meaning wherever you’re from, you can be assured we can help.</div>
                </div>
              </div>

              <div className={`card col-md-5`}>
                <div className={`card-img-top`} style={{ height: '200px' }}>
                  <img src={isMobile ? MobileLanding7 : Landing7} alt="landing7"
                    style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid black' }}
                  />
                </div>
                <div className={`card-body`}>
                  <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                    Multiple file types supported
                  </div>
                  <div className={`card-text`}>Afforai can extract data from a multitude of formats, including; PDF, URL, DOCX, PPTX & XLSX, as well as your own text & links from Websites. The possibilities are limitless!</div>
                </div>
              </div>
            </div>
            <div className={`row d-flex flex-md-row flex-column gap-2 justify-content-md-center mt-2`}>
              <div className={`card col-md-5`}>
                <div className={`card-img-top`}>
                  <img src={isMobile ? MobileLanding8 : Landing8} alt="landing8"
                    style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid black' }}
                  />
                </div>
                <div className={`card-body`}>
                  <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                    Valuable Data Citation
                  </div>
                  <div className={`card-text`}>Afforai is able to show exactly where your data has been extracted from & highlight it for you, so you never loose your time validating information again.</div>
                </div>
              </div>

              <div className={`card col-md-5`}>
                <div className={`card-img-top`}>
                  <img src={isMobile ? MobileLanding10 : Landing10} alt="landing10"
                    style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid black' }}
                  />
                </div>
                <div className={`card-body`}>
                  <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                    Built in Document Viewer
                  </div>
                  <div className={`card-text`}>Never Switch tabs again. Afforai’s document viewer means that you can have your uploaded files right next to your chatbot, giving you the ability to search the file, and refer to it for data citations.</div>
                </div>
              </div>
            </div>
            <div className={`row d-flex flex-md-row flex-column gap-2 justify-content-md-center mt-2`}>
              <div className={`card col-md-5`}>
                <div className={`card-img-top`}>
                  <img src={isMobile ? MobileLanding9 : Landing9} alt="landing9"
                    style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid black' }}
                  />
                </div>
                <div className={`card-body`}>
                  <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                    Unbreakable Security
                  </div>
                  <div className={`card-text`}>Afforai uses Azure Server & Azure OpenAI API. In other words, your data is more than safe with us. <a href='/'> Learn more.</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`container w-100 d-flex flex-md-row flex-column justify-content-md-between`}>
          <div className={`px-4 ml-4 d-flex flex-column col-md-5`}>
            <div className={`py-1 px-4`}
              style={{
                color: 'rgb(127, 0, 255)',
                border: '2px solid rgb(127, 0, 255)',
                borderRadius: '10px',
                width: 'fit-content'
              }}
            >
              <small style={{ fontWeight: '500' }}>Most versatile</small>
            </div>
            <div className={`${styles.heading, styles.heading2} my-2`}>Create multiple chatbots for different purposes</div>
            <div className={`${styles.start_text}`} style={{ textAlign: 'left' }}>Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.</div>
            <div className={`${isMobile ? 'd-none' : 'd-flex gap-5 mt-2'}`}>
              <Button>Get Started</Button>
              <Button style={{ border: '1px solid lightgray', color: 'gray' }}>Veiw Pricing</Button>
            </div>
          </div>
          <div className={`col-md-5 mr-4 mt-4 mt-md-1`}>
            <img src={isMobile ? MobileLanding11 : Landing11} alt=""
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`container w-100 d-flex flex-md-row flex-column-reverse gap-md-5 gap-3`}>
          <div className={`col-md-5 mr-4 mt-4 mt-md-1`}>
            <img src={isMobile ? MobileLanding12 : Landing12} alt="landing12"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>

          <div className={`px-4 ml-4 d-flex flex-column`}>
            <div className={`py-1 px-4`}
              style={{
                color: 'rgb(127, 0, 255)',
                border: '2px solid rgb(127, 0, 255)',
                borderRadius: '10px',
                width: 'fit-content'
              }}
            >
              <small style={{ fontWeight: '500' }}>Different Modes Available</small>
            </div>
            <div className={`${styles.heading, styles.heading2} my-2`}>Customize your assistant with a range of different modes</div>
            <div className={`${styles.start_text}`} style={{ textAlign: 'left' }}>Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which have unique ways of utilising our AI tools to answer your question(s).</div>
            <div className={`d-flex flex-column`}>
              {
                modes.map((item, key) => {
                  return <div className={`d-flex mt-4 gap-3`} style={{ color: 'rgb(58, 2, 153)' }} key={key}>
                    <img src={item.img} alt="modesimg"
                      className={`mt-1`}
                      style={{ height: '20px', width: '20px' }} />
                    <div className={`d-flex flex-column`}>
                      <div className='d-flex gap-3 mb-3'>
                        <span style={{ fontWeight: '500' }}>
                          {item.title}
                        </span>
                        <small style={{
                          background: 'rgb(239, 230, 255)',
                          color: 'rgb(96, 4, 255)',
                          borderRadius: '20px',
                          padding: '0 0.5rem',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}>
                          {item.subtitle}
                        </small>
                      </div>
                      <div>
                        <small className={`${styles.start_text}`} style={{ color: 'rgb(58, 2, 153)' }}>
                          {item.body}
                        </small>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`container w-100 d-flex flex-md-row flex-column justify-content-md-between`}>
          <div className={`px-4 ml-4 d-flex flex-column col-md-5`}>
            <div className={`py-1 px-4`}
              style={{
                color: 'rgb(127, 0, 255)',
                border: '2px solid rgb(127, 0, 255)',
                borderRadius: '10px',
                width: 'fit-content'
              }}
            >
              <small style={{ fontWeight: '500' }}>Multiple Language Supported</small>
            </div>
            <div className={`${styles.heading, styles.heading2} my-2`}>Regardless of where you are from, Afforai is for you</div>
            <div className={`${styles.start_text}`} style={{ textAlign: 'left' }}>We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.</div>
          </div>
          <div className={`col-md-5 mr-4 mt-4 mt-md-1`}>
            <img src={isMobile ? MobileLanding13 : Landing13} alt="landing13"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`container w-100 d-flex flex-md-row flex-column-reverse justify-content-md-between`}>
          <div className={`col-md-5 mr-4 mt-4 mt-md-1`}>
            <img src={Landing14} alt="landing14"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>

          <div className={`px-4 ml-4 d-flex flex-column col-md-5`}>
            <div className={`py-1 px-4`}
              style={{
                color: 'rgb(127, 0, 255)',
                border: '2px solid rgb(127, 0, 255)',
                borderRadius: '10px',
                width: 'fit-content'
              }}
            >
              <small style={{ fontWeight: '500' }}>Get more out of your files</small>
            </div>
            <div className={`${styles.heading, styles.heading2} my-2`}>File Wizard - a game changing new feature</div>
            <div className={`${styles.start_text}`} style={{ textAlign: 'left' }}>Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files, in limitless different ways. We can translate, summarize, or explain your upload in no time.</div>
            <div className={`${isMobile ? 'd-none' : 'd-flex gap-5 mt-2'}`}>
              <Button>Get Started</Button>
              <Button style={{ border: '1px solid lightgray', color: 'gray' }}>Veiw Pricing</Button>
            </div>
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`${styles.productivity} container-fluid w-100 d-flex flex-column align-items-md-center`}>
          <div className={`text-center py-1 px-4`}
            style={{
              color: 'rgb(127, 0, 255)',
              border: '2px solid rgb(127, 0, 255)',
              borderRadius: '10px',
              width: 'fit-content'
            }}
          >
            <small style={{ fontWeight: '500' }}>Seamless Integrations - Coming Soon</small>
          </div>
          <div className={`${styles.heading, styles.productivity_heading} my-2`}>
            Upload Files directly from Google Drive, One Drive & Dropbox
          </div>
          <div className={`${styles.start_text, styles.productivity_text} text-center}`}>
            Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred
          </div>
        </div>

        <div className={`container-fluid mt-2 ${styles.producitivity_img}`}>
          <img src={Landing15} alt="landing15" className={`${styles.producitivity_image_img}`} />
        </div>

        <div style={{ height: '200px' }}></div>

        <div className={`${styles.productivity} container-fluid w-100 d-flex flex-column align-items-md-center`}>
          <div className={`${styles.heading, styles.productivity_heading} my-2`}>
            Unquestionable accuracy & reliability
          </div>
          <div className={`${styles.start_text, styles.productivity_text} text-center}`}>
            We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.
          </div>
        </div>

        <div className={`container-fluid d-flex flex-md-row flex-column gap-2 mt-4 ${isMobile ? '' : 'justify-content-center'}`}>
          <div className={`card`} style={isMobile ? {} : { width: '350px' }}>
            <div className={`card-img-top`} style={{ height: '300px' }}>
              <img src={isMobile ? MobileLanding17 : Landing17} alt="landing17"
                style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid lightgray' }}
              />
            </div>
            <div className={`card-body`}>
              <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                Trusted by users all over the World
              </div>
              <div className={`card-text`}>Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy.</div>
            </div>
          </div>
          <div className={`card`} style={isMobile ? {} : { width: '350px' }}>
            <div className={`card-img-top`} style={{ height: '300px' }}>
              <img src={isMobile ? MobileLanding18 : Landing18} alt="landing18Landing18"
                style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid lightgray' }}
              />
            </div>
            <div className={`card-body`}>
              <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                Information filtering
              </div>
              <div className={`card-text`}>Afforai gives you the highest quality answers, and filters out any irrelevant information.</div>
            </div>
          </div>
          <div className={`card`} style={isMobile ? {} : { width: '350px' }}>
            <div className={`card-img-top`} style={{ height: '300px' }}>
              <img src={isMobile ? MobileLanding19 : Landing19} alt="landing19"
                style={{ height: '100%', width: '100%', OObjectFit: 'contain', borderBottom: '2px solid lightgray' }} d
              />
            </div>
            <div className={`card-body`}>
              <div className={`card-title`} style={{ fontWeight: '500', fontSize: '20px' }}>
                Built in Comprehension Model
              </div>
              <div className={`card-text`}>Our powerful comprehension model increases the power of our data retrieval.</div>
            </div>
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`container w-100 d-flex flex-md-row flex-column justify-content-md-between`}>
          <div className={`px-4 ml-4 d-flex flex-column col-md-5`}>
            <div className={`py-1 px-4`}
              style={{
                color: 'rgb(127, 0, 255)',
                border: '2px solid rgb(127, 0, 255)',
                borderRadius: '10px',
                width: 'fit-content'
              }}
            >
              <small style={{ fontWeight: '500' }}>My promise to you</small>
            </div>
            <div className={`${styles.heading, styles.heading2} my-2`}>100% money back guaranteed if you are not satisfied</div>
            <div className={`${styles.start_text}`} style={{ textAlign: 'left' }}>We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable, but able to maximise your satisfaction as a user. This is why we have implemented a money back guarantee if you find yourself not satisfied with the capabilities of Afforai.</div>
          </div>
          <div className={`col-md-5 mr-4 mt-4 mt-md-1`}>
            <img src={Landing20} alt="landing20"
              style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`container d-flex flex-column justify-content-center`}
          style={{ height: '500px', position: 'relative' }}
        >
          <div className={`d-flex flex-column align-items-center justify-content-center gap-3`}
            style={{ zIndex: '2' }}>
            <span className={`${styles.heading} text-center`}>Start saving time today!</span>
            <span className={`${styles.start_text} text-center`}>Join an ever-growing community, and get with Afforai started free of charge!</span>
            <Button>Get Started for Free</Button>
          </div>
          <div className={`w-100 ${styles.gradient_2}`} style={{ height: '200px', position: 'absolute', bottom: '0px' }}>
          </div>
        </div>

        <div className={`${styles.h_300}`}></div>

        <div className={`mt-4 container p-2 ${styles.about_us}`}>
          <div className={`${styles.intro} w-100 d-flex flex-column align-items-center mb-3`}>
            <div className={`${styles.heading} text-center my-2`}>
              FAQs
            </div>
            <div className={`${styles.start_text} text-center`}>
              For more information, check out our <a href="/">Help Center.</a>
            </div>
          </div>
        </div>
        <div className={`w-100 d-flex flex-column container my-3 gap-3`}>
          {faq.map((item, key) => {
            return <Dropdown title={item.que} body={item.ans} key={key}></Dropdown>
          })}
        </div>

        <div style={{ height: '200px' }}></div>

        <div className={`container d-flex justify-content-center px-2 mb-5`}>
          <div className={`w-100 p-4 grid ${styles.footer}`}>
            <div className={`row w-100`}>
              <div className={`d-flex flex-column col-sm-5 col-12`}>
                <div className={`d-flex align-items-center gap-2`}>
                  <img src={Logo} alt="appLogo" style={{ height: '30px', width: '30px', objectFit: 'contain' }} />
                  <h5>Afforai</h5>
                </div>
                <div className={`my-3`}>
                  <small style={{ color: 'gray' }}>Afforai is your research tool in to damn near anything. Helping you summarise, translate, and withdraw data from documents.</small>
                </div>
                <small style={{ color: 'gray' }}>Copyright © 2023 Afforai Inc. All rights reserved.</small>
                <div className={`my-4`}>
                  <a href="https://www.producthunt.com/products/afforai?utm_source=badge-top-post-badge&utm_medium=badge#afforai">
                    <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&theme=light&period=daily" alt="productofday"
                      style={{ height: '40px' }} />
                  </a>
                </div>
                <div>
                  <h6>Backed By</h6>
                  <img src={Sputnikatx} alt="skatx" style={{ height: '70px', width: '150px', objectFit: 'contain' }} />
                </div>
              </div>
              <div className={`col-sm row d-flex`}>
                <div className={`d-flex flex-column ${islessScreen ? 'row' : 'col'} ${styles.footer_list}`}>
                  <h6>Company</h6>
                  <small>Affiliate</small>
                  <small>Security</small>
                  <small>Roadmap</small>
                  <small>Contact Us</small>
                  <small>Our story</small>
                </div>
                <div className={`d-flex flex-column ${islessScreen ? 'row' : 'col'} ${styles.footer_list}`}>
                  <h6>Resources</h6>
                  <small>Help Center</small>
                  <small>API Docs</small>
                  <small>Terms of Use</small>
                  <small>Privacy Policy</small>
                </div>
              </div>
              <div className={`col-md row col- d-flex`}>
                <div className={`d-flex flex-column ${islessScreen ? 'row' : 'col'} ${styles.footer_list}`}>
                  <h6>Follow Us</h6>
                  <small>Facebook Group</small>
                  <small>LinkedIn</small>
                  <small>Twiter</small>
                  <small>Medium Block</small>
                </div>
                <div className={`d-flex flex-column ${islessScreen ? 'row' : 'col'} ${styles.footer_list}`}>
                  <h6>Language</h6>
                  <small>English</small>
                  <small>Vietnamese</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
