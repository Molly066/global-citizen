// 添加语言配置
const translations = {
    en: {
        title: 'Global Citizen',
        workSchedule: 'Your Work Schedule',
        timeZone: 'Time Zone (UTC+X):',
        selectUtc: 'Select UTC',
        startTime: 'Start Time:',
        endTime: 'End Time:',
        destination: 'Choose Your Dream Destination',
        selectCountry: 'Select Country',
        convert: 'Convert Time',
        result: 'Result',
        alerts: {
            selectTimeZone: 'Please select your time zone',
            selectTime: 'Please select both start and end times',
            selectCountry: 'Please select your destination country'
        },
        resultTemplate: 'In {country}, your work schedule will be {time}',
        suggestions: {
            lateNight: "Think twice, you'll need to stay up late or wake up very early",
            earlyMorning: "Not bad, early bird catches the worm",
            healthy: "Perfect schedule, go for it!"
        },
        regions: {
            Asia: "Asia",
            Europe: "Europe",
            NorthAmerica: "North America",
            SouthAmerica: "South America",
            Oceania: "Oceania",
            Africa: "Africa",
            MiddleEast: "Middle East"
        },
        countries: {
            China: "China",
            Japan: "Japan",
            SouthKorea: "South Korea",
            Thailand: "Thailand",
            Vietnam: "Vietnam",
            Singapore: "Singapore",
            Malaysia: "Malaysia",
            Indonesia: "Indonesia",
            India: "India",
            Pakistan: "Pakistan",
            Bangladesh: "Bangladesh",
            SaudiArabia: "Saudi Arabia",
            UAE: "UAE",
            Philippines: "Philippines",
            Cambodia: "Cambodia",
            Myanmar: "Myanmar",
            Nepal: "Nepal",
            Laos: "Laos",
            Iraq: "Iraq",
            Iran: "Iran",
            Kuwait: "Kuwait",
            Mongolia: "Mongolia",
            Uzbekistan: "Uzbekistan",
            UnitedKingdom: "United Kingdom",
            France: "France",
            Germany: "Germany",
            Italy: "Italy",
            Spain: "Spain",
            Portugal: "Portugal",
            Sweden: "Sweden",
            Norway: "Norway",
            Finland: "Finland",
            Denmark: "Denmark",
            Netherlands: "Netherlands",
            Belgium: "Belgium",
            Switzerland: "Switzerland",
            Russia: "Russia",
            Poland: "Poland",
            Austria: "Austria",
            Greece: "Greece",
            USA: "USA",
            Canada: "Canada",
            Mexico: "Mexico",
            Brazil: "Brazil",
            Argentina: "Argentina",
            Chile: "Chile",
            Colombia: "Colombia",
            Venezuela: "Venezuela",
            Ecuador: "Ecuador",
            Bolivia: "Bolivia",
            Uruguay: "Uruguay",
            Paraguay: "Paraguay",
            Australia: "Australia",
            NewZealand: "New Zealand",
            PapuaNewGuinea: "Papua New Guinea",
            Samoa: "Samoa",
            Fiji: "Fiji",
            SolomonIslands: "Solomon Islands",
            MarshallIslands: "Marshall Islands",
            Egypt: "Egypt",
            Morocco: "Morocco",
            SouthAfrica: "South Africa",
            Ethiopia: "Ethiopia",
            Nigeria: "Nigeria",
            Ghana: "Ghana",
            Kenya: "Kenya",
            Algeria: "Algeria",
            Libya: "Libya",
            Tanzania: "Tanzania",
            Sudan: "Sudan",
            Tunisia: "Tunisia",
            Zimbabwe: "Zimbabwe",
            Angola: "Angola",
            Mozambique: "Mozambique",
            Senegal: "Senegal",
            Cameroon: "Cameroon",
            Turkey: "Turkey",
            Israel: "Israel",
            Jordan: "Jordan",
            Lebanon: "Lebanon",
            Qatar: "Qatar",
            Oman: "Oman",
            Bahrain: "Bahrain",
            "USA-Eastern": "USA - Eastern",
            "USA-Central": "USA - Central",
            "USA-Mountain": "USA - Mountain",
            "USA-Pacific": "USA - Pacific",
            "USA-Hawaii": "USA - Hawaii",
            "USA-Alaska": "USA - Alaska",
            "Canada-Eastern": "Canada - Eastern",
            "Canada-Central": "Canada - Central",
            "Canada-Mountain": "Canada - Mountain",
            "Canada-Pacific": "Canada - Pacific",
            "Mexico-Central": "Mexico - Central",
            "Mexico-Mountain": "Mexico - Mountain",
            "Mexico-Pacific": "Mexico - Pacific",
            "Brunei": "Brunei",
            "Macau": "Macau",
            "Maldives": "Maldives",
            "TimorLeste": "Timor-Leste",
            "Bhutan": "Bhutan",
            "Vanuatu": "Vanuatu",
            "Romania": "Romania",
            "Ireland": "Ireland"
        }
    },
    zh: {
        title: '世界公民',
        workSchedule: '你的工作时间',
        timeZone: '时区 (UTC+X):',
        selectUtc: '选择时区',
        startTime: '开始时间:',
        endTime: '结束时间:',
        destination: '选择旅居国家',
        selectCountry: '选择国家',
        convert: '转换时间',
        result: '结果',
        alerts: {
            selectTimeZone: '请选择你的时区',
            selectTime: '请选择开始和结束时间',
            selectCountry: '请选择目标国家'
        },
        resultTemplate: '在{country}，你的工作时间将是 {time}',
        suggestions: {
            lateNight: '再想想，你需要早起或者熬夜',
            earlyMorning: '还不错，早起一会儿，晚上嗨',
            healthy: '非常健康的作息，冲吧'
        },
        regions: {
            Asia: "亚洲",
            Europe: "欧洲",
            NorthAmerica: "北美洲",
            SouthAmerica: "南美洲",
            Oceania: "大洋洲",
            Africa: "非洲",
            MiddleEast: "中东"
        },
        countries: {
            China: "中国",
            Japan: "日本",
            SouthKorea: "韩国",
            Thailand: "泰国",
            Vietnam: "越南",
            Singapore: "新加坡",
            Malaysia: "马来西亚",
            Indonesia: "印度尼西亚",
            India: "印度",
            Pakistan: "巴基斯坦",
            Bangladesh: "孟加拉国",
            SaudiArabia: "沙特阿拉伯",
            UAE: "阿联酋",
            Philippines: "菲律宾",
            Cambodia: "柬埔寨",
            Myanmar: "缅甸",
            Nepal: "尼泊尔",
            Laos: "老挝",
            Iraq: "伊拉克",
            Iran: "伊朗",
            Kuwait: "科威特",
            Mongolia: "蒙古",
            Uzbekistan: "乌兹别克斯坦",
            UnitedKingdom: "英国",
            France: "法国",
            Germany: "德国",
            Italy: "意大利",
            Spain: "西班牙",
            Portugal: "葡萄牙",
            Sweden: "瑞典",
            Norway: "挪威",
            Finland: "芬兰",
            Denmark: "丹麦",
            Netherlands: "荷兰",
            Belgium: "比利时",
            Switzerland: "瑞士",
            Russia: "俄罗斯",
            Poland: "波兰",
            Austria: "奥地利",
            Greece: "希腊",
            USA: "美国",
            Canada: "加拿大",
            Mexico: "墨西哥",
            Brazil: "巴西",
            Argentina: "阿根廷",
            Chile: "智利",
            Colombia: "哥伦比亚",
            Venezuela: "委内瑞拉",
            Australia: "澳大利亚",
            NewZealand: "新西兰",
            Egypt: "埃及",
            Morocco: "摩洛哥",
            SouthAfrica: "南非",
            Turkey: "土耳其",
            Israel: "以色列",
            Jordan: "约旦",
            Lebanon: "黎巴嫩",
            Qatar: "卡塔尔",
            Oman: "阿曼",
            Bahrain: "巴林",
            "USA-Eastern": "美国 - 东部",
            "USA-Central": "美国 - 中部",
            "USA-Mountain": "美国 - 山地",
            "USA-Pacific": "美国 - 太平洋",
            "USA-Hawaii": "美国 - 夏威夷",
            "USA-Alaska": "美国 - 阿拉斯加",
            "Canada-Eastern": "加拿大 - 东部",
            "Canada-Central": "加拿大 - 中部",
            "Canada-Mountain": "加拿大 - 山地",
            "Canada-Pacific": "加拿大 - 太平洋",
            "Mexico-Central": "墨西哥 - 中部",
            "Mexico-Mountain": "墨西哥 - 山地",
            "Mexico-Pacific": "墨西哥 - 太平洋",
            "Brunei": "文莱",
            "Macau": "澳门",
            "Maldives": "马尔代夫",
            "TimorLeste": "东帝汶",
            "Bhutan": "不丹",
            "Vanuatu": "瓦努阿图",
            "Romania": "罗马尼亚",
            "Ireland": "爱尔兰"
        }
    }
};

let currentLang = 'en';

Object.keys(translations.en.countries).forEach(countryKey => {
    if (!translations.zh.countries[countryKey]) {
        console.warn(`Missing Chinese translation for: ${countryKey}`);
    }
});

Object.keys(translations.zh.countries).forEach(countryKey => {
    if (!translations.en.countries[countryKey]) {
        console.warn(`Missing English translation for: ${countryKey}`);
    }
});

// 语言切换函数
function switchLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // 更新所有文本内容
    document.querySelector('h1').textContent = t.title;
    document.querySelector('.input-section h2').textContent = t.workSchedule;
    document.querySelector('.timezone-input label').textContent = t.timeZone;
    document.querySelector('#timezone option:first-child').textContent = t.selectUtc;
    document.querySelectorAll('.time-input label')[0].textContent = t.startTime;
    document.querySelectorAll('.time-input label')[1].textContent = t.endTime;
    document.querySelector('.country-section h2').textContent = t.destination;
    document.querySelector('#countrySelect option:first-child').textContent = t.selectCountry;
    document.querySelector('.convert-btn').textContent = t.convert;
    document.querySelector('.result-section h2').textContent = t.result;

    // 更新按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 更新国家列表
    const optgroups = document.querySelectorAll('#countrySelect optgroup');
    optgroups.forEach(optgroup => {
        const regionKey = optgroup.getAttribute('data-region-key');
        if (regionKey) {
            optgroup.label = t.regions[regionKey];
        }
    });

    const options = document.querySelectorAll('#countrySelect option[data-country-key]');
    options.forEach(option => {
        const countryKey = option.getAttribute('data-country-key');
        if (countryKey) {
            const utcInfo = option.getAttribute('data-utc-info');
            const summer = option.getAttribute('data-summer') === 'true';
            const countryName = t.countries[countryKey];
            if (countryName) {
                option.textContent = `${countryName} ${utcInfo}${summer ? ' - ' + (lang === 'zh' ? '夏令时' : 'Summer') : ''}`;
            } else {
                // 如果国家名称未找到，隐藏该选项
                option.style.display = 'none';
            }
        }
    });
    


    // 如果结果已存在，重新转换以更新语言
    if (document.getElementById('result').textContent) {
        convertTime();
    }

    // 更新选择器的样式
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.style.direction = lang === 'zh' ? 'ltr' : 'ltr';
        select.style.textAlign = lang === 'zh' ? 'left' : 'left';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 添加缓存控制头
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(function(registrations) {
            for(let registration of registrations) {
                registration.unregister();
            }
        });
    }
    
    // 清除浏览器缓存
    if (window.caches) {
        caches.keys().then(function(names) {
            for (let name of names) {
                caches.delete(name);
            }
        });
    }
    
    // 初始化小时选择器
    const hourSelects = document.querySelectorAll('.hour-select');
    for (let i = 0; i <= 23; i++) {
        const hourOption = document.createElement('option');
        hourOption.value = i;
        hourOption.textContent = i.toString().padStart(2, '0');
        hourSelects.forEach(select => {
            select.appendChild(hourOption.cloneNode(true));
        });
    }

    // 初始化分钟选择器
    const minuteSelects = document.querySelectorAll('.minute-select');
    for (let i = 0; i <= 59; i++) {
        const minuteOption = document.createElement('option');
        minuteOption.value = i;
        minuteOption.textContent = i.toString().padStart(2, '0');
        minuteSelects.forEach(select => {
            select.appendChild(minuteOption.cloneNode(true));
        });
    }
    const countrySelect = document.getElementById('countrySelect');
    const enCountries = Object.keys(translations.en.countries);
    
    // 确保每个国家都在下拉列表中
    enCountries.forEach(countryKey => {
        const exists = Array.from(countrySelect.options).some(option => option.getAttribute('data-country-key') === countryKey);
        if (!exists) {
            console.warn(`Missing country in dropdown: ${countryKey}`);
        }
    });
    
    // 初始化语言
    switchLanguage('en');
});

function convertTime() {
    // 获取输入值
    const workTimezone = parseInt(document.getElementById('timezone').value);
    const targetTimezone = parseInt(document.getElementById('countrySelect').value);

    // 获取开始时间和结束时间
    const startHour = parseInt(document.getElementById('startHour').value);
    const startMinute = parseInt(document.getElementById('startMinute').value);
    const endHour = parseInt(document.getElementById('endHour').value);
    const endMinute = parseInt(document.getElementById('endMinute').value);

    // 验证时区输入
    if (isNaN(workTimezone)) {
        alert('Please select your time zone');
        return;
    }

    // 验证时间输入
    if (isNaN(startHour) || isNaN(startMinute) || isNaN(endHour) || isNaN(endMinute)) {
        alert('Please select both start and end times');
        return;
    }

    // 验证目标国家选择
    if (!targetTimezone && targetTimezone !== 0) {
        alert('Please select your destination country');
        return;
    }

    // 计算时差
    const timeDiff = targetTimezone - workTimezone;

    // 计算新的时间
    let newStartHour = startHour + timeDiff;
    let newEndHour = endHour + timeDiff;

    // 处理跨日情况
    if (newStartHour >= 24) {
        newStartHour -= 24;
    } else if (newStartHour < 0) {
        newStartHour += 24;
    }

    if (newEndHour >= 24) {
        newEndHour -= 24;
    } else if (newEndHour < 0) {
        newEndHour += 24;
    }

    // 获取选中的国家名称
    const countrySelect = document.getElementById('countrySelect');
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const countryName = selectedCountry.split(' ')[0]; // 提取国家名称，去掉时区部分

    // 格式化输出时间
    const formatTime = (hour, minute) => {
        return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    };

    // 获取当前语言的翻译
    const t = translations[currentLang];

    // 生成时间建议
    let suggestion = '';
    if (newStartHour >= 0 && newStartHour <= 3) {
        suggestion = t.suggestions.lateNight;
    } else if (newStartHour >= 4 && newStartHour <= 8) {
        suggestion = t.suggestions.earlyMorning;
    } else if (newStartHour >= 9 && newStartHour <= 11) {
        suggestion = t.suggestions.healthy;
    }

    // 格式化结果文本
    const timeRange = `${formatTime(newStartHour, startMinute)} - ${formatTime(newEndHour, endMinute)}`;
    const resultText = t.resultTemplate
        .replace('{country}', countryName)
        .replace('{time}', timeRange);

    // 显示结果和建议
    document.getElementById('result').innerHTML = `${resultText}<br><br>${suggestion}`;
} 