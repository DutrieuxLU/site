import Draggable from 'react-draggable'
import { useState, useContext, useEffect } from 'react'

import { DraggableContext } from '../context/DraggableContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPaperPlane,
  faCircle,
  faEnvelopeOpen,
  faCircleRadiation,
  faXmark
} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { emails } from '../utils/data'

import sha512 from 'crypto-js/sha512'

const Email = () => {
  const { draggable } = useContext(DraggableContext)

  const [open, setOpen] = useState([true, false, false, false, false, false])
  const [read, setRead] = useState([true, false, false, false, false, false])

  const [showSendFrame, setShowSendFrame] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }

  const [password, setPassword] = useState('')
  const [showPWFrame, setShowPWFrame] = useState(false)

  useEffect(() => {
    if (password === 'heartzap') {
      alert(
        `Sike the password doesn't do anything yet. If you want to make it do something, contribute at https://github.com/purduehackers/site.`
      )
      setPassword('')
    } 
    else if (sha512(password).toString().toUpperCase() === '53E76B5A117D7DF9A9733F4CE7615418A97DC93A2823E1FC1493A9E94C4F27324781867DCF28D6E51FD8F9BF26B1D528302D60D752D6238BBE82CD96A9BF211C') {
      alert(
        `Nice codebreaking! If you feel so inclined, contribute at https://github.com/purduehackers/site`
      )
      setPassword('')
    }
  }, [password])
  useEffect(() => {
    if (showPWFrame) {
      console.log(
        '%c the password is heartzap ',
        `background-color: #f59e0b; border-radius: 4px; color: black; font-size: 28px;`
      )
    } else {
      setPassword('')
    }
  }, [showPWFrame])

  const [showScrollReminder, setShowScrollReminder] = useState(true)

  return (
    <div className="bg-teal-500 min-h-screen sm:p-24 pb-8">
      <div className="flex flex-col w-11/12 sm:w-full lg:w-4/5 mx-auto relative">
        <div
          className="border-2 border-black flex justify-between items-center bg-white
              w-full h-12 px-8 mt-8 sm:mt-0 mb-4 sm:mb-8 shadow-email shadow-gray-900/70"
        >
          <div className="w-12 flex justify-between text-[8px] text-amber-400">
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
            <FontAwesomeIcon icon={faCircle} />
          </div>
          <div className="w-24 flex justify-between text-2xl">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-300"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="cursor-pointer hover:text-amber-300"
              onClick={() => setShowSendFrame(true)}
            />
            <FontAwesomeIcon
              icon={faCircleRadiation}
              className="cursor-pointer hover:text-rose-500"
              onClick={() => setShowPWFrame(true)}
            />
          </div>
        </div>
        {showPWFrame && (
          <Draggable disabled={!draggable} handle=".handle">
            <div
              className="border-2 border-black w-9/12 sm:w-96 sm:min-w-fit mx-auto
                shadow-email shadow-gray-900/30 h-fit absolute z-[100] top-8 left-20 sm:left-52"
            >
              <div className="handle border-b-2 border-black flex flex-row bg-gray-800 cursor-pointer">
                <p
                  className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                  onClick={() => setShowPWFrame(false)}
                >
                  x
                </p>
                <div className="grow" />
                <p className="text-white">password</p>
                <div className="grow" />
              </div>
              <div className="bg-black text-white p-8 flex flex-col justify-center items-center">
                <input
                  className="bg-black w-full sm:w-3/5 py-1 text-center"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </Draggable>
        )}
        {!showSendFrame && (
          <Draggable handle=".handle">
            <div
              className="border-2 border-black w-11/12 sm:w-[32rem] sm:min-w-[25rem] mx-auto
                shadow-email shadow-gray-900/30 h-fit absolute z-[100] top-16 left-20 sm:left-40"
            >
              <div className="handle border-b-2 border-black flex flex-row bg-green-300 cursor-pointer">
                <p
                  className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                  onClick={() => setShowSendFrame(false)}
                >
                  x
                </p>
                <div className="grow" />
                <p>{subject.trim()? subject: 'new message'}</p>
                <div className="grow" />
              </div>
              <form 
                onSubmit={handleSubmit}
                className="bg-white pl-2 pr-3 py-2 overflow-scroll h-fit max-h-[26rem] 
                  scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
              >
                <p className="font-bold">
                  to: {' '}
                  <span className="text-black bg-amber-300 text-sm px-1 rounded-full border-2 border-black">
                    PURDUE HACKERS INC.
                  </span>
                </p>
                <div>
                  <p className="font-bold">from: </p>
                  <input
                    className="text-mxs border-2 border-black rounded-md w-full py-1 no-ring"
                    type="email"
                    placeholder="wackhacker@gmail.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <p className="font-bold">subject:</p>
                  <input
                    className="text-mxs border-2 border-black rounded-md w-full py-1 no-ring"
                    type="text"
                    placeholder="Inquiry of the Utmost Importance"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                  />
                </div>
                <br />
                <textarea 
                  className="text-mxs border-2 border-black rounded-md w-full py-1 resize-none no-ring
                    scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
                  rows={6}
                  placeholder="Today was the most glorious day, for I had tacos for lunch..."
                  value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <button 
                  className="email-btn bg-pink-300 mt-1 mb-2"
                  type="submit"
                >Send</button>
              </form>
            </div>
          </Draggable>
        )}
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between w-full relative">
          <div
            className="overflow-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 min-w-fit
                border-4 border-black flex flex-col bg-white w-11/12 sm:w-7/12 md:w-64 h-[32rem] shadow-email shadow-gray-900/70"
          >
            {emails.map((email, i) => {
              return (
                <div
                  className={`border-b-2 border-black flex flex-col bg-white w-full p-4 overflow-y-hidden
                      hover:bg-gray-100 cursor-pointer`}
                  key={i}
                  onClick={() => {
                    let newOpen = open
                    newOpen[i] = true
                    setOpen((newOpen) => [...newOpen])

                    let newRead = read
                    newRead[i] = true
                    setRead((newRead) => [...newRead])
                  }}
                >
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      {!read[i] && (
                        <div className="bg-blue-400 w-2 h-2 rounded ml-1 mr-4"></div>
                      )}
                      {open[i] && (
                        <FontAwesomeIcon
                          icon={faEnvelopeOpen}
                          className="text-blue-200 mr-4"
                        />
                      )}
                      {!open[i] && read[i] && (
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-blue-200 mr-4"
                        />
                      )}
                      <div>
                        <p className="text-xs text-gray-400 font font-sans">
                          {email.author}
                        </p>
                        <h4
                          className={`${
                            !read[i] && 'font-medium text-black-400'
                          }`}
                        >
                          {email.subject}
                        </h4>
                      </div>
                    </div>
                    {false && (
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-gray-300"
                      />
                    )}
                    {false && (
                      <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        className="text-gray-300"
                      />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          {open[0] && (
            <Draggable handle=".handle">
              <div
                className="border-2 border-black w-11/12 sm:w-[36rem] sm:min-w-[30rem] mr-12 
                  shadow-email shadow-gray-900/30 h-fit z-0 top-5 left-4 relative"
              >
                <div
                  className={`flex flex-col items-center ${
                    showScrollReminder
                      ? 'opacity-100'
                      : 'opacity-0 transition-opacity'
                  }`}
                >
                  <div className="absolute bottom-4 border-2 border-black bg-white p-1 text-sm font-bold animate-bounce">
                    <p>👇 scroll to read 👁</p>
                  </div>
                </div>
                <div className="border-b-2 border-black flex flex-row bg-sky-300 cursor-pointer">
                  <p
                    className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                    onClick={() => {
                      let newOpen = open
                      newOpen[0] = false
                      setOpen((newOpen) => [...newOpen])
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-xs"
                    />
                  </p>
                  <div className="grow handle" />
                  <p className="handle">an invitation</p>
                  <div className="grow handle" />
                  <div />
                </div>
                <div
                  className="bg-white pl-2 pr-3 py-2 overflow-scroll h-96 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
                  onScroll={() => setShowScrollReminder(false)}
                >
                  <p className="font-bold">
                    from:{' '}
                    <span className="font-normal">
                      zap@
                      <span className="bg-black text-white">REDACTED</span>
                    </span>
                  </p>
                  <p className="font-bold">
                    subject: <span className="font-normal">an invitation</span>
                  </p>
                  <br />
                  <div className="flex flex-col gap-y-4 text-mxs">
                    <p>Dear Hacker,</p>
                    <p>
                      <span className="font-bold">
                        Shipping a technical project
                      </span>{' '}
                      that you’re proud of is among the most{' '}
                      <span className="font-bold">
                        {' '}
                        validating and rewarding{' '}
                      </span>{' '}
                      things you can do as a young person. College is the best
                      time in our lives to do it—but{' '}
                      <span className="font-bold">
                        actually doing it is soooooooooo hard.
                      </span>{' '}
                      You have to find something you’d enjoy building, feels
                      unique, and allows you to learn new things, but not too
                      many new things, otherwise you’ll give up. Then, you have
                      to find the time and motivation to actually build the
                      thing—all while being pulled in every direction by
                      academic and social oligations.
                    </p>
                    <p>
                      It’s no surprise most students simply don’t bother, &
                      graduate never having made something they’re proud of.
                    </p>
                    <p>
                      <span className="font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                          Purdue Hackers
                        </span>{' '}
                        is a student organization
                      </span>{' '}
                      (AKA magical universe) full of radically kind, inclusive,
                      and weirdo creative people who{' '}
                      <span className="font-bold">
                        learn new things & ship projects together.
                      </span>
                    </p>
                    <p>
                      Many of us grew up never having found our people until we
                      were united by our shared love for making things. Via our
                      community, workshops, and Hack Nights, we want to create
                      an environment where{' '}
                      <span className="font-bold">
                        you can find your people too
                      </span>
                      , and make magic with them. ✨
                    </p>
                    <p>
                      If you go to Purdue—whether you've never written code
                      before, or are highly technical, whether you're an art
                      major or a CS major—
                      <span className="font-bold">
                        we invite you to join our universe.
                      </span>
                    </p>
                  </div>
                  <br />
                  <p className="text-mxs">See you soon,</p>
                  <p className="text-mxs">💛⚡️ The Purdue Hackers community</p>
                </div>
              </div>
            </Draggable>
          )}
          {emails.map((email, i) => {
            if (i != 0 && open[i])
              return (
                <Draggable
                  handle=".handle"
                  defaultPosition={{ x: -100 - 40 * i, y: 10 + 18 * i }}
                >
                  <div
                    className={`border-2 border-black w-11/12 sm:w-[32rem] sm:min-w-[28rem]
                    shadow-email shadow-gray-900/30 h-fit absolute z-[${i}0] overflow-hidden`}
                  >
                    <div className={`border-b-2 border-black flex flex-row bg-${email.color}-300 cursor-pointer`}>
                      <p
                        className="px-2 border-r-2 border-black bg-red-400 hover:bg-red-500"
                        onClick={() => {
                          let newOpen = open
                          newOpen[i] = false
                          setOpen((newOpen) => [...newOpen])
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faXmark}
                          className="text-xs"
                        />
                      </p>
                      <div className="grow handle" />
                      <p className="handle">{email.subject}</p>
                      <div className="grow handle" />
                    </div>
                    <div className="bg-white pl-2 pr-3 py-2 overflow-scroll h-fit max-h-[26rem] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
                      <p className="font-bold">
                        from: <span className="font-normal">{email.email}</span>
                      </p>
                      <p className="font-bold">
                        subject:{' '}
                        <span className="font-normal">{email.subject}</span>
                      </p>
                      <br />
                      <div className="flex flex-col gap-y-4 text-mxs overflow-x-hidden">
                        <p
                          dangerouslySetInnerHTML={{ __html: email.content }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </Draggable>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default Email
