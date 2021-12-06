import React from 'react';
import Link from 'next/link';
import Dropdown from '../../components/dropdown';
import Grid from '../../components/Layout/Grid/grid';

import Sidebar from '../../components/Layout/Sidebar/sidebar';
import Content from '../../components/Layout/Content/content';
import Map from '../../components/Map/map';


let categories = {
  'museums': "5ec7d096a90548233654d4aa",
  'horse-riding': "5ec7d096a90548233654d48e",
  'geothermal-baths': "5ec7d096a90548233654d493",
  'diving': "5ec7d096a90548233654d480",
  'culinary-experience': "5ec7d096a90548233654d4a0",
  'hiking': "5ec7d096a90548233654d47d",
  'whale-wathching': "5ec7d096a90548233654d4a6",
  'skiing': "5ec7d096a90548233654d483",
  'cave-exploring': "5ec7d096a90548233654d493",
  'glacier-tours': "5ec7d096a90548233654d4a9",
  'kayaking': "5ec7d096a90548233654d4a5",
}

export default function WeatherNow() {


    return (
			<Grid>
				<Content>
					<div>

					</div>
				</Content>
				<Sidebar>
					Here comes the sidebar
				</Sidebar>
			</Grid>
    )
}

