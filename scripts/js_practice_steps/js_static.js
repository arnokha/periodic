function createBody() {
  var main;
  main = document.createElement('main');
  main.innerHTML =  '<main>\
   <!--   ******************        Main Table        ********************   -->\
   <figure>\
     <img class="magnifying_glass" src="http://i.imgur.com/5g3mqWs.png"/>\
   </figure>\
\
   <table>\
\
     <caption>The Periodic Table of Elements</caption>\
\
     <!-- *** Row 0 (for headings only) *** -->\
     <tbody>\
     <tr>\
       <th></th>\
       <th scope = "col">1</th>\
       <th colspan = "16"></th>\
       <th scope = "col">18</th>\
     </tr>  \
            \
     <!-- *** 1st row *** -->\
     <tr>\
       <th scope = "row">1</th>\
       <!-- H -->\
       <td class = "nonmetal">\
       <a href="&amp;link;Hydrogen">\
         <ruby>H<rt>1</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Hydrogen</strong>\
         <tt>1.0079</tt>\
       </a>\
       <div class = "big_display">\
         <ruby>H<rt>1</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Hydrogen</strong>\
         <tt>1.0079</tt>\
       </div>\
       </td>\
       <th scope = "col">2</th>\
       <td colspan = "10"></td>\
       <th scope = "col">13</th>\
       <th scope = "col">14</th>\
       <th scope = "col">15</th>\
       <th scope = "col">16</th>\
       <th scope = "col">17</th>\
       <!-- He -->\
       <td class = "noble-gas">\
       <a href="&amp;link;Helium">\
         <ruby>He<rt>2</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Helium</strong>\
         <tt>4.0026</tt></a>\
       <div class = "big_display">\
         <ruby>He<rt>2</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Helium</strong>\
         <tt>4.0026</tt>\
      </div>\
       </td>\
     </tr>\
      \
     <!-- *** 2nd row *** -->\
     <tr>\
       <th scope = "row">2</th>\
       <!-- Li -->\
       <td class = "alkali-metal">\
       <a href="&amp;link;Lithium">\
         <ruby>Li<rt>3</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lithium</strong>\
         <tt>6.941</tt></a>\
       <div class = "big_display">\
         <ruby>Li<rt>3</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lithium</strong>\
         <tt>6.941</tt> \
      </div>\
       </td>\
       <!-- Be -->\
       <td class = "alkaline-earth">\
       <a href="&amp;link;Beryllium">\
         <ruby>Be<rt>4</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Beryllium</strong>\
         <tt>9.0122</tt></a>\
       <div class = "big_display">\
         <ruby>Be<rt>4</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Beryllium</strong>\
         <tt>9.0122</tt>\
      </div>\
       </td>\
       <td colspan = "10"></td><!-- 3 - 12 -->\
       <!-- B -->\
       <td class = "semi-metal">\
       <a href="&amp;link;Boron">\
         <ruby>B<rt>5</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Boron</strong>\
         <tt>10.811</tt></a>\
       <div class = "big_display">\
         <ruby>B<rt>5</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Boron</strong>\
         <tt>10.811</tt>\
      </div>\
       </td>\
       <!-- C -->\
       <td class = "nonmetal">\
       <a href="&amp;link;Carbon">\
         <ruby>C<rt>6</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Carbon</strong>\
         <tt>12.0107</tt></a>\
       <div class = "big_display">\
         <ruby>C<rt>6</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Carbon</strong>\
         <tt>12.0107</tt>\
      </div>\
       </td>\
       <!-- N -->\
       <td class = "nonmetal">\
       <a href="&amp;link;Nitrogen">\
         <ruby>N<rt>7</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Nitrogen</strong>\
         <tt>14.0067</tt></a>\
       <div class = "big_display">\
         <ruby>N<rt>7</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Nitrogen</strong>\
         <tt>14.0067</tt>\
      </div>\
       </td>\
       <!-- O -->\
       <td class = "nonmetal">\
       <a href="&amp;link;Oxygen">\
         <ruby>O<rt>8</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Oxygen</strong>\
         <tt>15.9994</tt></a>\
       <div class = "big_display">\
         <ruby>O<rt>8</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Oxygen</strong>\
         <tt>15.9994</tt>\
      </div>\
       </td>\
       <!-- F -->\
       <td class = "halogen">\
       <a href="&amp;link;Fluorine">\
         <ruby>F<rt>9</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Fluorine</strong>\
         <tt>18.9984</tt></a>\
       <div class = "big_display">\
         <ruby>F<rt>9</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Fluorine</strong>\
         <tt>18.9984</tt>\
      </div>\
       </td>\
       <!-- Ne -->\
       <td class = "noble-gas">\
       <a href="&amp;link;Neon">\
         <ruby>Ne<rt>10</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Neon</strong>\
         <tt>20.1797</tt></a>\
       <div class = "big_display">\
         <ruby>Ne<rt>10</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Neon</strong>\
         <tt>20.1797</tt>\
      </div>\
       </td>\
     </tr>\
      \
     <!-- *** 3rd row *** -->\
     <tr>\
       <th scope = "row">3</th>\
       <!-- Na -->\
       <td class = "alkali-metal">\
       <a href="&amp;link;Sodium">\
         <ruby>Na<rt>11</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Sodium</strong>\
         <tt>22.9897</tt></a>\
       <div class = "big_display">\
         <ruby>Na<rt>11</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Sodium</strong>\
         <tt>22.9897</tt>\
      </div>\
       </td>\
       <!-- Mg -->\
       <td class = "alkaline-earth">\
       <a href="&amp;link;Magnesium">\
         <ruby>Mg<rt>12</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Magnesium</strong>\
         <tt>24.305</tt></a>\
       <div class = "big_display">\
         <ruby>Mg<rt>12</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Magnesium</strong>\
         <tt>24.305</tt>\
      </div>\
       </td>\
       <th scope = "col">3</th>\
       <th scope = "col">4</th>\
       <th scope = "col">5</th>\
       <th scope = "col">6</th>\
       <th scope = "col">7</th>\
       <th scope = "col">8</th>\
       <th scope = "col">9</th>\
       <th scope = "col">10</th>\
       <th scope = "col">11</th>\
       <th scope = "col">12</th>\
       <!-- Al -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Aluminum">\
         <ruby>Al<rt>13</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Aluminum</strong>\
         <tt>26.9815</tt></a>\
       <div class = "big_display">\
         <ruby>Al<rt>13</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Aluminum</strong>\
         <tt>26.9815</tt>\
      </div>\
       </td>\
       <!-- Si -->\
       <td class = "semi-metal">\
       <a href="&amp;link;Silicon">\
         <ruby>Si<rt>14</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Silicon</strong>\
         <tt>28.0855</tt></a>\
       <div class = "big_display">\
         <ruby>Si<rt>14</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Silicon</strong>\
         <tt>28.0855</tt>\
      </div>\
       </td>\
       <!-- P -->\
       <td class = "nonmetal">\
       <a href="&amp;link;Phosphorus">\
         <ruby>P<rt>15</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Phosphorus</strong>\
         <tt>30.9738</tt></a>\
       <div class = "big_display">\
         <ruby>P<rt>15</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Phosphorus</strong>\
         <tt>30.9738</tt>\
      </div>\
       </td>\
       <!-- S -->\
       <td class = "nonmetal">\
       <a href="&amp;link;Sulfur">\
         <ruby>S<rt>16</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Sulfur</strong>\
         <tt>32.065</tt></a>\
       <div class = "big_display">\
         <ruby>S<rt>16</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Sulfur</strong>\
         <tt>32.065</tt>\
      </div>\
       </td>\
       <!-- Cl -->\
       <td class = "halogen">\
       <a href="&amp;link;Chlorine">\
         <ruby>Cl<rt>17</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Chlorine</strong>\
         <tt>35.453</tt></a>\
       <div class = "big_display">\
         <ruby>Cl<rt>17</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Chlorine</strong>\
         <tt>35.453</tt>\
      </div>\
       </td>\
       <!-- Ar -->\
       <td class = "noble-gas">\
       <a href="&amp;link;Argon">\
         <ruby>Ar<rt>18</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Argon</strong>\
         <tt>39.948</tt></a>\
       <div class = "big_display">\
         <ruby>Ar<rt>18</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Argon</strong>\
         <tt>39.948</tt>\
      </div>\
       </td>\
     </tr>\
      \
     <!-- *** 4th row *** -->\
     <tr>\
       <th scope = "row">4</th>\
       <!-- K -->\
       <td class = "alkali-metal">\
       <a href="&amp;link;Potassium">\
         <ruby>K<rt>19</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Potassium</strong>\
         <tt>39.0983</tt></a>\
       <div class = "big_display">\
         <ruby>K<rt>19</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Potassium</strong>\
         <tt>39.0983</tt>\
      </div>\
       </td>\
       <!-- Ca -->\
       <td class = "alkaline-earth">\
       <a href="&amp;link;Calcium">\
         <ruby>Ca<rt>20</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Calcium</strong>\
         <tt>40.078</tt></a>\
       <div class = "big_display">\
         <ruby>Ca<rt>20</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Calcium</strong>\
         <tt>40.078</tt>\
      </div>\
       </td>\
       <!-- Sc -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Scandium">\
         <ruby>Sc<rt>21</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Scandium</strong>\
         <tt>44.9559</tt></a>\
       <div class = "big_display">\
         <ruby>Sc<rt>21</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Scandium</strong>\
         <tt>44.9559</tt>\
      </div>\
       </td>\
       <!-- Ti -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Titanium">\
         <ruby>Ti<rt>22</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Titanium</strong>\
         <tt>47.867</tt></a>\
       <div class = "big_display">\
         <ruby>Ti<rt>22</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Titanium</strong>\
         <tt>47.867</tt>\
      </div>\
       </td>\
       <!-- V -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Vanadium">\
         <ruby>V<rt>23</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Vanadium</strong>\
         <tt>50.9415</tt></a>\
       <div class = "big_display">\
         <ruby>V<rt>23</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Vanadium</strong>\
         <tt>50.9415</tt>\
      </div>\
       </td>\
       <!-- Cr -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Chromium">\
         <ruby>Cr<rt>24</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Chromium</strong>\
         <tt>51.9961</tt></a>\
       <div class = "big_display">\
         <ruby>Cr<rt>24</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Chromium</strong>\
         <tt>51.9961</tt>\
      </div>\
       </td>\
       <!-- Mn -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Manganese">\
         <ruby>Mn<rt>25</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Manganese</strong>\
         <tt>54.938</tt></a>\
       <div class = "big_display">\
         <ruby>Mn<rt>25</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Manganese</strong>\
         <tt>54.938</tt>\
      </div>\
       </td>\
       <!-- Fe -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Iron">\
         <ruby>Fe<rt>26</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Iron</strong>\
         <tt>55.845</tt></a>\
       <div class = "big_display">\
         <ruby>Fe<rt>26</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Iron</strong>\
         <tt>55.845</tt>\
      </div>\
       </td>\
       <!-- Co -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Cobalt">\
         <ruby>Co<rt>27</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cobalt</strong>\
         <tt>58.9332</tt></a>\
       <div class = "big_display">\
         <ruby>Co<rt>27</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cobalt</strong>\
         <tt>58.9332</tt>\
      </div>\
       </td>\
       <!-- Ni -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Nickel">\
         <ruby>Ni<rt>28</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Nickel</strong>\
         <tt>58.6934</tt></a>\
       <div class = "big_display">\
         <ruby>Ni<rt>28</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Nickel</strong>\
         <tt>58.6934</tt>\
      </div>\
       </td>\
       <!-- Cu -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Copper">\
         <ruby>Cu<rt>29</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Copper</strong>\
         <tt>63.546</tt></a>\
       <div class = "big_display">\
         <ruby>Cu<rt>29</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Copper</strong>\
         <tt>63.546</tt>\
      </div>\
       </td>\
       <!-- Zn -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Zinc">\
         <ruby>Zn<rt>30</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Zinc</strong>\
         <tt>65.39</tt></a>\
       <div class = "big_display">\
         <ruby>Zn<rt>30</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Zinc</strong>\
         <tt>65.39</tt>\
      </div>\
       </td>\
       <!-- Ga -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Gallium">\
         <ruby>Ga<rt>31</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Gallium</strong>\
         <tt>69.723</tt></a>\
       <div class = "big_display">\
         <ruby>Ga<rt>31</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Gallium</strong>\
         <tt>69.723</tt>\
      </div>\
       </td>\
       <!-- Ge -->\
       <td class = "semi-metal">\
       <a href="&amp;link;Germanium">\
         <ruby>Ge<rt>32</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Germanium</strong>\
         <tt>72.64</tt></a>\
       <div class = "big_display">\
         <ruby>Ge<rt>32</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Germanium</strong>\
         <tt>72.64</tt>\
      </div>\
       </td>\
       <!-- As -->\
       <td class = "semi-metal">\
       <a href="&amp;link;Arsenic">\
         <ruby>As<rt>33</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Arsenic</strong>\
         <tt>74.9216</tt></a>\
       <div class = "big_display">\
         <ruby>As<rt>33</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Arsenic</strong>\
         <tt>74.9216</tt>\
      </div>\
       </td>\
       <!-- Se -->\
       <td class = "nonmetal">\
       <a href="&amp;link;Selenium">\
         <ruby>Se<rt>34</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Selenium</strong>\
         <tt>78.96</tt></a>\
       <div class = "big_display">\
         <ruby>Se<rt>34</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Selenium</strong>\
         <tt>78.96</tt>\
      </div>\
       </td>\
       <!-- Br -->\
       <td class = "halogen">\
       <a href="&amp;link;Bromine">\
         <ruby>Br<rt>35</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Bromine</strong>\
         <tt>79.904</tt></a>\
       <div class = "big_display">\
         <ruby>Br<rt>35</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Bromine</strong>\
         <tt>79.904</tt>\
      </div>\
       </td>\
       <!-- Kr -->\
       <td class = "noble-gas">\
       <a href="&amp;link;Krypton">\
         <ruby>Kr<rt>36</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Krypton</strong>\
         <tt>83.8</tt></a>\
       <div class = "big_display">\
         <ruby>Kr<rt>36</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Krypton</strong>\
         <tt>83.8</tt>\
      </div>\
       </td>\
     </tr>\
      \
     <!-- *** 5th row *** -->\
     <tr>\
       <th scope = "row">5</th>\
       <!-- Rb -->\
       <td class = "alkali-metal">\
       <a href="&amp;link;Rubidium">\
         <ruby>Rb<rt>37</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rubidium</strong>\
         <tt>85.4678</tt></a>\
       <div class = "big_display">\
         <ruby>Rb<rt>37</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rubidium</strong>\
         <tt>85.4678</tt>\
      </div>\
       </td>\
       <!-- Sr -->\
       <td class = "alkaline-earth">\
       <a href="&amp;link;Strontium">\
         <ruby>Sr<rt>38</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Strontium</strong>\
         <tt>87.62</tt></a>\
       <div class = "big_display">\
         <ruby>Sr<rt>38</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Strontium</strong>\
         <tt>87.62</tt>\
      </div>\
       </td>\
       <!-- Y -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Yttrium">\
         <ruby>Y<rt>39</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Yttrium</strong>\
         <tt>88.9059</tt></a>\
       <div class = "big_display">\
         <ruby>Y<rt>39</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Yttrium</strong>\
         <tt>88.9059</tt>\
      </div>\
       </td>\
       <!-- Zr -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Zirconium">\
         <ruby>Zr<rt>40</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Zirconium</strong>\
         <tt>91.224</tt></a>\
       <div class = "big_display">\
         <ruby>Zr<rt>40</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Zirconium</strong>\
         <tt>91.224</tt>\
      </div>\
       </td>\
      <!-- Nb -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Niobium">\
         <ruby>Nb<rt>41</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Niobium</strong>\
         <tt>92.9064</tt></a>\
       <div class = "big_display">\
         <ruby>Nb<rt>41</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Niobium</strong>\
         <tt>92.9064</tt>\
      </div>\
       </td>\
       <!-- Mo -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Molybdenum">\
         <ruby>Mo<rt>42</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Molybdenum</strong>\
         <tt>95.94</tt></a>\
       <div class = "big_display">\
         <ruby>Mo<rt>42</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Molybdenum</strong>\
         <tt>95.94</tt>\
      </div>\
       </td>\
       <!-- Tc -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Technetium">\
         <ruby>Tc<rt>43</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Technetium</strong>\
         <tt>98</tt></a>\
       <div class = "big_display">\
         <ruby>Tc<rt>43</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Technetium</strong>\
         <tt>98</tt>\
      </div>\
       </td>\
       <!-- Ru -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Ruthenium">\
         <ruby>Ru<rt>44</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ruthenium</strong>\
         <tt>101.07</tt></a>\
       <div class = "big_display">\
         <ruby>Ru<rt>44</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ruthenium</strong>\
         <tt>101.07</tt>\
      </div>\
       </td>\
       <!-- Rh -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Rhodium">\
         <ruby>Rh<rt>45</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rhodium</strong>\
         <tt>102.9055</tt></a>\
       <div class = "big_display">\
         <ruby>Rh<rt>45</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rhodium</strong>\
         <tt>102.9055</tt>\
      </div>\
       </td>\
       <!-- Pd -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Palladium">\
         <ruby>Pd<rt>46</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Palladium</strong>\
         <tt>106.42</tt></a>\
       <div class = "big_display">\
         <ruby>Pd<rt>46</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Palladium</strong>\
         <tt>106.42</tt>\
      </div>\
       </td>\
       <!-- Ag -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Silver">\
         <ruby>Ag<rt>47</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Silver</strong>\
         <tt>107.8682</tt></a>\
       <div class = "big_display">\
         <ruby>Ag<rt>47</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Silver</strong>\
         <tt>107.8682</tt>\
      </div>\
       </td>\
       <!-- Cd -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Cadmium">\
         <ruby>Cd<rt>48</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cadmium</strong>\
         <tt>112.411</tt></a>\
       <div class = "big_display">\
         <ruby>Cd<rt>48</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cadmium</strong>\
         <tt>112.411</tt>\
      </div>\
       </td>\
       <!-- In -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Indium">\
         <ruby>In<rt>49</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Indium</strong>\
         <tt>114.818</tt></a>\
       <div class = "big_display">\
         <ruby>In<rt>49</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Indium</strong>\
         <tt>114.818</tt>\
      </div>\
       </td>\
       <!-- Sn -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Tin">\
         <ruby>Sn<rt>50</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tin</strong>\
         <tt>118.71</tt></a>\
       <div class = "big_display">\
         <ruby>Sn<rt>50</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tin</strong>\
         <tt>118.71</tt>\
      </div>\
       </td>\
       <!-- Sb -->\
       <td class = "semi-metal">\
       <a href="&amp;link;Antimony">\
         <ruby>Sb<rt>51</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Antimony</strong>\
         <tt>121.76</tt></a>\
       <div class = "big_display">\
         <ruby>Sb<rt>51</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Antimony</strong>\
         <tt>121.76</tt>\
      </div>\
       </td>\
       <!-- Te -->\
       <td class = "semi-metal">\
       <a href="&amp;link;Tellurium">\
         <ruby>Te<rt>52</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tellurium</strong>\
         <tt>127.6</tt></a>\
       <div class = "big_display">\
         <ruby>Te<rt>52</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tellurium</strong>\
         <tt>127.6</tt>\
      </div>\
       </td>\
       <!-- I -->\
       <td class = "halogen">\
       <a href="&amp;link;Iodine">\
         <ruby>I<rt>53</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Iodine</strong>\
         <tt>126.9045</tt></a>\
       <div class = "big_display">\
         <ruby>I<rt>53</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Iodine</strong>\
         <tt>126.9045</tt>\
      </div>\
       </td>\
       <!-- Xe -->\
       <td class = "noble-gas">\
       <a href="&amp;link;Xenon">\
         <ruby>Xe<rt>54</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Xenon</strong>\
         <tt>131.293</tt></a>\
       <div class = "big_display">\
         <ruby>Xe<rt>54</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Xenon</strong>\
         <tt>131.293</tt>\
      </div>\
       </td>\
     </tr>\
      \
     <!-- *** 6th row *** -->\
     <tr>\
       <th scope = "row">6</th>\
       <!-- Cs -->\
       <td class = "alkali-metal">\
       <a href="&amp;link;Cesium">\
         <ruby>Cs<rt>55</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cesium</strong>\
         <tt>132.9055</tt></a>\
       <div class = "big_display">\
         <ruby>Cs<rt>55</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cesium</strong>\
         <tt>132.9055</tt>\
      </div>\
       </td>\
       <!-- Ba -->\
       <td class = "alkaline-earth">\
       <a href="&amp;link;Barium">\
         <ruby>Ba<rt>56</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Barium</strong>\
         <tt>137.327</tt></a>\
       <div class = "big_display">\
         <ruby>Ba<rt>56</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Barium</strong>\
         <tt>137.327</tt>\
      </div>\
       </td>\
       <!-- Lanthanides [57, 71] -->\
       <td class = "lanthanide">\
         <ruby>57-71</ruby>\
       </td>\
       <!-- Hf -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Hafnium">\
         <ruby>Hf<rt>72</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Hafnium</strong>\
         <tt>178.49</tt></a>\
       <div class = "big_display">\
         <ruby>Hf<rt>72</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Hafnium</strong>\
         <tt>178.49</tt>\
      </div>\
       </td>\
       <!-- Ta -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Tantalum">\
         <ruby>Ta<rt>73</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tantalum</strong>\
         <tt>180.9479</tt></a>\
       <div class = "big_display">\
         <ruby>Ta<rt>73</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tantalum</strong>\
         <tt>180.9479</tt>\
      </div>\
       </td>\
       <!-- W -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Tungsten">\
         <ruby>W<rt>74</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tungsten</strong>\
         <tt>183.84</tt></a>\
       <div class = "big_display">\
         <ruby>W<rt>74</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Tungsten</strong>\
         <tt>183.84</tt>\
      </div>\
       </td>\
       <!-- Re -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Rhenium">\
         <ruby>Re<rt>75</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rhenium</strong>\
         <tt>186.207</tt></a>\
       <div class = "big_display">\
         <ruby>Re<rt>75</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rhenium</strong>\
         <tt>186.207</tt>\
      </div>\
       </td>\
       <!-- Os -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Osmium">\
         <ruby>Os<rt>76</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Osmium</strong>\
         <tt>190.23</tt></a>\
       <div class = "big_display">\
         <ruby>Os<rt>76</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Osmium</strong>\
         <tt>190.23</tt>\
      </div>\
       </td>\
       <!-- Ir -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Iridium">\
         <ruby>Ir<rt>77</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Iridium</strong>\
         <tt>192.217</tt></a>\
       <div class = "big_display">\
         <ruby>Ir<rt>77</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Iridium</strong>\
         <tt>192.217</tt>\
      </div>\
       </td>\
       <!-- Pt -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Platinum">\
         <ruby>Pt<rt>78</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Platinum</strong>\
         <tt>195.078</tt></a>\
       <div class = "big_display">\
         <ruby>Pt<rt>78</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Platinum</strong>\
         <tt>195.078</tt>\
      </div>\
       </td>\
       <!-- Au -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Gold">\
         <ruby>Au<rt>79</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Gold</strong>\
         <tt>196.9665</tt></a>\
       <div class = "big_display">\
         <ruby>Au<rt>79</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Gold</strong>\
         <tt>196.9665</tt>\
      </div>\
       </td>\
       <!-- Hg -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Mercury">\
         <ruby>Hg<rt>80</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Mercury</strong>\
         <tt>200.59</tt></a>\
       <div class = "big_display">\
         <ruby>Hg<rt>80</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Mercury</strong>\
         <tt>200.59</tt>\
      </div>\
       </td>\
       <!-- Tl -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Thallium">\
         <ruby>Tl<rt>81</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Thallium</strong>\
         <tt>204.3833</tt></a>\
       <div class = "big_display">\
         <ruby>Tl<rt>81</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Thallium</strong>\
         <tt>204.3833</tt>\
      </div>\
       </td>\
       <!-- Pb -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Lead">\
         <ruby>Pb<rt>82</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lead</strong>\
         <tt>207.2</tt></a>\
       <div class = "big_display">\
         <ruby>Pb<rt>82</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lead</strong>\
         <tt>207.2</tt>\
      </div>\
       </td>\
       <!-- Bi -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Bismuth">\
         <ruby>Bi<rt>83</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Bismuth</strong>\
         <tt>208.9804</tt></a>\
       <div class = "big_display">\
         <ruby>Bi<rt>83</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Bismuth</strong>\
         <tt>208.9804</tt>\
      </div>\
       </td>\
       <!-- Po -->\
       <td class = "semi-metal">\
       <a href="&amp;link;Polonium">\
         <ruby>Po<rt>84</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Polonium</strong>\
         <tt><q class = "square">209</q></tt></a>\
       <div class = "big_display">\
         <ruby>Po<rt>84</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Polonium</strong>\
         <tt><q class = "square">209</q></tt>\
      </div>\
       </td>\
       <!-- At -->\
       <td class = "halogen">\
       <a href="&amp;link;Astatine">\
         <ruby>At<rt>85</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Astatine</strong>\
         <tt>210</tt></a>\
       <div class = "big_display">\
         <ruby>At<rt>85</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Astatine</strong>\
         <tt>210</tt>\
      </div>\
       </td>\
       <!-- Rn -->\
       <td class = "noble-gas">\
       <a href="&amp;link;Radon">\
         <ruby>Rn<rt>86</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Radon</strong>\
         <tt>222</tt></a>\
       <div class = "big_display">\
         <ruby>Rn<rt>86</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Radon</strong>\
         <tt>222</tt>\
      </div>\
       </td>\
     </tr>\
      \
     <!-- *** 7th row *** -->\
     <tr>\
       <th scope = "row">7</th>\
       <!-- Fr -->\
       <td class = "alkali-metal">\
       <a href="&amp;link;Francium">\
         <ruby>Fr<rt>87</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Francium</strong>\
         <tt>223.02</tt></a>\
       <div class = "big_display">\
         <ruby>Fr<rt>87</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Francium</strong>\
         <tt>223.02</tt>\
      </div>\
       </td>\
       <!-- Ra -->\
       <td class = "alkaline-earth">\
       <a href="&amp;link;Radium">\
         <ruby>Ra<rt>88</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Radium</strong>\
         <tt>226.03</tt></a>\
       <div class = "big_display">\
         <ruby>Ra<rt>88</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Radium</strong>\
         <tt>226.03</tt>\
      </div>\
       </td>\
       <!-- Actinides [89, 103] -->\
       <td class = "actinide">\
         <ruby>89-103</ruby>\
       </td>\
       <!-- Rf -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Rutherfordium">\
         <ruby>Rf<rt>104</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rutherfordium</strong>\
         <tt><q class = "square">261</q></tt></a>\
       <div class = "big_display">\
         <ruby>Rf<rt>104</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Rutherfordium</strong>\
         <tt><q class = "square">261</q></tt>\
      </div>\
       </td>\
       <!-- Db -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Dubnium">\
         <ruby>Db<rt>105</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Dubnium</strong>\
         <tt><q class = "square">262</q></tt></a>\
       <div class = "big_display">\
         <ruby>Db<rt>105</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Dubnium</strong>\
         <tt><q class = "square">262</q></tt>\
      </div>\
       </td>\
       <!-- Sg -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Seaborgium">\
         <ruby>Sg<rt>106</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Seaborgium</strong>\
         <tt><q class = "square">266</q></tt></a>\
       <div class = "big_display">\
         <ruby>Sg<rt>106</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Seaborgium</strong>\
         <tt><q class = "square">266</q></tt>\
      </div>\
       </td>\
       <!-- Bh -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Bohrium">\
         <ruby>Bh<rt>107</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Bohrium</strong>\
         <tt><q class = "square">264</q></tt></a>\
       <div class = "big_display">\
         <ruby>Bh<rt>107</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Bohrium</strong>\
         <tt><q class = "square">264</q></tt>\
      </div>\
       </td>\
       <!-- Hs -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Hassium">\
         <ruby>Hs<rt>108</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Hassium</strong>\
         <tt><q class = "square">269</q></tt></a>\
       <div class = "big_display">\
         <ruby>Hs<rt>108</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Hassium</strong>\
         <tt><q class = "square">269</q></tt>\
      </div>\
       </td>\
       <!-- Mt -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Meitnerium">\
         <ruby>Mt<rt>109</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Meitnerium</strong>\
         <tt><q class = "square">268</q></tt></a>\
       <div class = "big_display">\
         <ruby>Mt<rt>109</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Meitnerium</strong>\
         <tt><q class = "square">268</q></tt>\
      </div>\
       </td>\
       <!-- Ds -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Darmstadtium">\
         <ruby>Ds<rt>110</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Darmstadtium</strong>\
         <tt><q class = "square">269</q></tt></a>\
       <div class = "big_display">\
         <ruby>Ds<rt>110</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Darmstadtium</strong>\
         <tt><q class = "square">269</q></tt>\
      </div>\
       </td>\
       <!-- Rg -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Roentgenium">\
         <ruby>Rg<rt>111</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Roentgenium</strong>\
         <tt><q class = "square">272</q></tt></a>\
       <div class = "big_display">\
         <ruby>Rg<rt>111</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Roentgenium</strong>\
         <tt><q class = "square">272</q></tt>\
      </div>\
       </td>\
       <!-- Cn -->\
       <td class = "transition-metal">\
       <a href="&amp;link;Copernicium">\
         <ruby>Cn<rt>112</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Copernicium</strong>\
         <tt><q class = "square">277</q></tt></a>\
       <div class = "big_display">\
         <ruby>Cn<rt>112</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Copernicium</strong>\
         <tt><q class = "square">277</q></tt>\
      </div>\
       </td>\
       <!-- Uut -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Ununtrium">\
         <ruby>Uut<rt>113</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununtrium</strong>\
         <tt><q class = "square">unknown</q></tt></a>\
       <div class = "big_display">\
         <ruby>Uut<rt>113</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununtrium</strong>\
         <tt><q class = "square">unknown</q></tt>\
      </div>\
       </td>\
       <!-- Uuq -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Flerovium">\
         <ruby>Fl<rt>114</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Flerovium</strong>\
         <tt><q class = "square">289</q></tt></a>\
       <div class = "big_display">\
         <ruby>Fl<rt>114</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Flerovium</strong>\
         <tt><q class = "square">289</q></tt>\
      </div>\
       </td>\
       <!-- Uup -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Ununpentium">\
         <ruby>Uup<rt>115</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununpentium</strong>\
         <tt><q class = "square">unknown</q></tt></a>\
       <div class = "big_display">\
         <ruby>Uup<rt>115</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununpentium</strong>\
         <tt><q class = "square">unknown</q></tt>\
      </div>\
       </td>\
       <!-- Uuh -->\
       <td class = "basic-metal">\
       <a href="&amp;link;Livermorium">\
         <ruby>Lv<rt>116</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Livermorium</strong>\
         <tt><q class = "square">261</q></tt></a>\
       <div class = "big_display">\
         <ruby>Lv<rt>116</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Livermorium</strong>\
         <tt><q class = "square">261</q></tt>\
      </div>\
       </td>\
       <!-- Uus -->\
       <td class = "halogen">\
       <a href="&amp;link;Ununseptium">\
         <ruby>Uus<rt>117</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununseptium</strong>\
         <tt>261</tt></a>\
       <div class = "big_display">\
         <ruby>Uus<rt>117</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununseptium</strong>\
         <tt>261</tt>\
      </div>\
       </td>\
       <!-- Uuo -->\
       <td class = "noble-gas">\
       <a href="&amp;link;Ununoctium">\
         <ruby>Uuo<rt>118</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununoctium</strong>\
         <tt>unknown</tt></a>\
       <div class = "big_display">\
         <ruby>Uuo<rt>118</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ununoctium</strong>\
         <tt>unknown</tt>\
      </div>\
      </td>\
     </tr>   \
     </tbody>\
\
     <tfoot></tfoot>\
\
</table>\
\
\
   <!-- ******************    Lanthanides and Alkalides    ******************** -->\
   <table>\
   <thead></thead>\
\
   <tbody>\
     <!-- Lanthanides -->\
     <tr>\
       <th scope = "row" id = "lanthanide-heading"> \
            Lanthanide Series</th>\
       <td class = "lanthanide">\
       <a href="&amp;link;Lanthanum">\
         <ruby>La<rt>57</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lanthanum</strong>\
         <tt>138.9055</tt></a>\
       <div class = "big_display">\
         <ruby>La<rt>57</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lanthanum</strong>\
         <tt>138.9055</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Cerium">\
         <ruby>Ce<rt>58</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cerium</strong>\
         <tt>140.116</tt></a>\
       <div class = "big_display">\
         <ruby>Ce<rt>58</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Cerium</strong>\
         <tt>140.116</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Praseodymium">\
         <ruby>Pr<rt>59</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Praseodymium</strong>\
         <tt>140.9077</tt></a>\
       <div class = "big_display">\
         <ruby>Pr<rt>59</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Praseodymium</strong>\
         <tt>140.9077</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Neodymium">\
         <ruby>Nd<rt>60</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Neodymium</strong>\
         <tt>144.24</tt></a>\
       <div class = "big_display">\
         <ruby>Nd<rt>60</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Neodymium</strong>\
         <tt>144.24</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Promethium">\
         <ruby>Pm<rt>61</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Promethium</strong>\
         <tt>145</tt></a>\
       <div class = "big_display">\
         <ruby>Pm<rt>61</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Promethium</strong>\
         <tt>145</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Samarium">\
         <ruby>Sm<rt>62</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Samarium</strong>\
         <tt>150.36</tt></a>\
       <div class = "big_display">\
         <ruby>Sm<rt>62</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Samarium</strong>\
         <tt>150.36</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Europium">\
         <ruby>Eu<rt>63</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Europium</strong>\
         <tt>151.964</tt></a>\
       <div class = "big_display">\
         <ruby>Eu<rt>63</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Europium</strong>\
         <tt>151.964</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Gadolinium">\
         <ruby>Gd<rt>64</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Gadolinium</strong>\
         <tt>157.25</tt></a>\
       <div class = "big_display">\
         <ruby>Gd<rt>64</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Gadolinium</strong>\
         <tt>157.25</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Terbium">\
         <ruby>Tb<rt>65</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Terbium</strong>\
         <tt>158.9253</tt></a>\
       <div class = "big_display">\
         <ruby>Tb<rt>65</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Terbium</strong>\
         <tt>158.9253</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Dysprosium">\
         <ruby>Dy<rt>66</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Dysprosium</strong>\
         <tt>162.5</tt></a>\
       <div class = "big_display">\
         <ruby>Dy<rt>66</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Dysprosium</strong>\
         <tt>162.5</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Holmium">\
         <ruby>Ho<rt>67</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Holmium</strong>\
         <tt>164.9303</tt></a>\
       <div class = "big_display">\
         <ruby>Ho<rt>67</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Holmium</strong>\
         <tt>164.9303</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Erbium">\
         <ruby>Er<rt>68</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Erbium</strong>\
         <tt>167.259</tt></a>\
       <div class = "big_display">\
         <ruby>Er<rt>68</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Erbium</strong>\
         <tt>167.259</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Thulium">\
         <ruby>Tm<rt>69</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Thulium</strong>\
         <tt>168.9342</tt></a>\
       <div class = "big_display">\
         <ruby>Tm<rt>69</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Thulium</strong>\
         <tt>168.9342</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Ytterbium">\
         <ruby>Yb<rt>70</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ytterbium</strong>\
         <tt>173.04</tt></a>\
       <div class = "big_display">\
         <ruby>Yb<rt>70</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Ytterbium</strong>\
         <tt>173.04</tt>\
      </div>\
       </td>\
       <td class = "lanthanide">\
       <a href="&amp;link;Lutetium">\
         <ruby>Lu<rt>71</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lutetium</strong>\
         <tt>174.967</tt></a>\
       <div class = "big_display">\
         <ruby>Lu<rt>71</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lutetium</strong>\
         <tt>174.967</tt>\
      </div>\
       </td>\
     </tr>\
\
     <!-- Actinides -->\
     <tr>\
       <th scope = "row" id = "actinide-heading">\
          Actinide Series \
       </th>\
       <td class = "actinide">\
       <a href="&amp;link;Actinium">\
         <ruby>Ac<rt>89</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Actinium</strong>\
         <tt>227</tt></a>\
       <div class = "big_display">\
         <ruby>Ac<rt>89</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Actinium</strong>\
         <tt>227</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Thorium">\
         <ruby>Th<rt>90</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Thorium</strong>\
         <tt>232.0381</tt></a>\
       <div class = "big_display">\
         <ruby>Th<rt>90</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Thorium</strong>\
         <tt>232.0381</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Protactinium">\
         <ruby>Pa<rt>91</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Protactinium</strong>\
         <tt>231.0359</tt></a>\
       <div class = "big_display">\
         <ruby>Pa<rt>91</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Protactinium</strong>\
         <tt>231.0359</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Uranium">\
         <ruby>U<rt>92</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Uranium</strong>\
         <tt>238.0289</tt></a>\
       <div class = "big_display">\
         <ruby>U<rt>92</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Uranium</strong>\
         <tt>238.0289</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Neptunium">\
         <ruby>Np<rt>93</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Neptunium</strong>\
         <tt>237</tt></a>\
       <div class = "big_display">\
         <ruby>Np<rt>93</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Neptunium</strong>\
         <tt>237</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Plutonium">\
         <ruby>Pu<rt>94</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Plutonium</strong>\
         <tt>244</tt></a>\
       <div class = "big_display">\
         <ruby>Pu<rt>94</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Plutonium</strong>\
         <tt>244</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Americium">\
         <ruby>Am<rt>95</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Americium</strong>\
         <tt>243</tt></a>\
       <div class = "big_display">\
         <ruby>Am<rt>95</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Americium</strong>\
         <tt>243</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Curium">\
         <ruby>Cm<rt>96</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Curium</strong>\
         <tt>247</tt></a>\
       <div class = "big_display">\
         <ruby>Cm<rt>96</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Curium</strong>\
         <tt>247</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Berkelium">\
         <ruby>Bk<rt>97</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Berkelium</strong>\
         <tt>247</tt></a>\
       <div class = "big_display">\
         <ruby>Bk<rt>97</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Berkelium</strong>\
         <tt>247</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Californium">\
         <ruby>Cf<rt>98</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Californium</strong>\
         <tt><q class = "square">251</q></tt></a>\
       <div class = "big_display">\
         <ruby>Cf<rt>98</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Californium</strong>\
         <tt><q class = "square">251</q></tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Einsteinium">\
         <ruby>Es<rt>99</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Einsteinium</strong>\
         <tt>252</tt></a>\
       <div class = "big_display">\
         <ruby>Es<rt>99</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Einsteinium</strong>\
         <tt>252</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Fermium">\
         <ruby>Fm<rt>100</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Fermium</strong>\
         <tt>257</tt></a>\
       <div class = "big_display">\
         <ruby>Fm<rt>100</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Fermium</strong>\
         <tt>257</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Mendelevium">\
         <ruby>Md<rt>101</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Mendelevium</strong>\
         <tt>258</tt></a>\
       <div class = "big_display">\
         <ruby>Md<rt>101</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Mendelevium</strong>\
         <tt>258</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Nobelium">\
         <ruby>No<rt>102</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Nobelium</strong>\
         <tt>259</tt></a>\
       <div class = "big_display">\
         <ruby>No<rt>102</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Nobelium</strong>\
         <tt>259</tt>\
      </div>\
       </td>\
       <td class = "actinide">\
       <a href="&amp;link;Lawrencium">\
         <ruby>Lr<rt>103</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lawrencium</strong>\
         <tt><q class = "square">262</q></tt></a>\
       <div class = "big_display">\
         <ruby>Lr<rt>103</rt><rp>&amp;nobrowser;</rp></ruby>\
         <strong>Lawrencium</strong>\
         <tt><q class = "square">262</q></tt>\
      </div>\
       </td>\
     </tr>\
     </tbody>\
\
     <tfoot></tfoot>\
   </table>\
 </main>'
  document.body.appendChild(main);
}