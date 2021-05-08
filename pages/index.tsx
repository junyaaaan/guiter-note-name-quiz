import {SSRProvider} from '@react-aria/ssr';
import React, { useEffect, useState } from 'react';
import {
  ToggleButton,
  Flex,
  TextField,
  RadioGroup,
  Radio,
  View,
  Provider,
  defaultTheme,
  NumberField,
  Footer
} from '@adobe/react-spectrum';
import Head from 'next/head';
import * as constants from '~/constants'
import Headings from '~/components/Headings/Headings'

export default function Home() {
  const [currentNote, setCurrentNote] = useState(constants.NOTES_NAME_LIST[0])

  const fingerBord = () => {
    const fingerBordUnit = () => {
      const firstNoteIndex = constants.NOTES_NAME_LIST.findIndex(val => val === settings.strings.firstNoteName)

      const before = [...constants.NOTES_NAME_LIST].slice(0, firstNoteIndex - 1)

      const after = [...constants.NOTES_NAME_LIST].slice(firstNoteIndex)

      return [
      ...after,
      ...before
      ]
    }

    const maxFingerBord = [
      ...fingerBordUnit(),
      ...fingerBordUnit(),
      ...fingerBordUnit()
    ]

    return maxFingerBord.slice(0, settings.maxFret)
  }

  useEffect(() => {
    const currentNoteName = () => {
      const VaildNotesName = fingerBord().slice(settings.startFret, settings.lastFret)
      return VaildNotesName[Math.floor(Math.random() * VaildNotesName.length)]
    }

    setCurrentNote(currentNoteName())
  },[])

  // Settings
  const [settings] = useState({
  // const [settings, setSettings] = useState({
    strings: constants.STRING_LIST[0],
    startFret: 0,
    lastFret: 3,
    interval: 10000,
    maxFret: constants.MAX_FLET_LIST[0]
  })

  // 弦を指定
  // const setSettingsString = (num:number) => {
  //   const currentString = () => {
  //     return constants.STRING_LIST[0]
  //   }

  //   setSettings({
  //     ...settings,
  //     strings: currentString()
  //   })
  // }

  // 最初のフレットを指定
  // 最後のフレットを指定
  // 音名を変える感覚を指定
  // ギターの最大フレットを指定

  return (
    <SSRProvider>
      <Head>
        <title>Which fret?</title>
        <link rel="stylesheet" href="https://use.typekit.net/uma8ayv.css" />
      </Head>
      <Provider theme={defaultTheme} minHeight="100%">
        <div style={{
          margin: '0 auto',
          maxWidth: '700px'
        }}>
          <View padding="size-250">
            {/* <div>
              {settings.strings.id}<br />
              {settings.strings.firstNoteName}<br />
              {settings.startFret}<br />
              {settings.lastFret}<br />
              {settings.interval}<br />
              {settings.maxFret}<br />
            </div> */}

            <Headings tag="1" level="1">Which<br />Fret?</Headings>

            <View marginTop="size-800" >
              <div style={{
                textAlign:'center',
                fontSize: '120px',
              }}>
                {currentNote}
              </div>
            </View>

            {/* TODO: アイコンにする？ */}
            <Flex marginTop="size-600" justifyContent="center">
              <ToggleButton isEmphasized width="size-2000" height="size-600" marginX="size-10">START/STOP</ToggleButton>
            </Flex>
          </View>

          <View padding="size-250" marginTop="size-800">
            <Headings tag="2" level="2">Settings</Headings>

            <View marginTop="size-600">
              <RadioGroup label="String">
                {constants.STRING_LIST.map((val, index) => (
                  <Radio value={val.id.toString()} key={index}>
                    {val.id}
                  </Radio>
                ))}
              </RadioGroup>
            </View>

            <View marginTop="size-160">
              <NumberField label="Start fret" defaultValue={0} minValue={0} maxValue={settings.maxFret - 3} />
              <NumberField label="Last fret" defaultValue={3} minValue={3} maxValue={settings.maxFret} />
            </View>

            <View marginTop="size-160">
              <TextField label="Interval" placeholder="Interval" marginEnd="size-100" />
            </View>

            <View marginTop="size-160">
              <RadioGroup label="MAX fret">
                {constants.MAX_FLET_LIST.map((val, index) => (
                  <Radio value={val.toString()} key={index}>
                    {val}
                  </Radio>
                ))}
              </RadioGroup>
            </View>
            <Footer marginTop="size-1200">
              <View>
                githubここよ的な
              </View>
            </Footer>
          </View>
        </div>
      </Provider>
    </SSRProvider>
  );
}
