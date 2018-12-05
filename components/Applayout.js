import React from 'react'
import styled from 'styled-components'


const wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr;
  background-color: white;
`  

const sidebar = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #ed4438;
 `

const header = styled.div`
  grid-column: 2;
  grid-row: 1;
  background-color: white;
  font-size: 60px;
  padding: 10px;
  margin-top: 30px; 
`

const content = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: white;
  padding: 10px;	
` 


