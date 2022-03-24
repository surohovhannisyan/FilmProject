export interface IMovieGenres {
  key: number;
  genre_name: string;
}

export interface IMovieLanguages {
  key: string;
  language: string;
  name: string | undefined;
}
export enum GenreId {
  Action = 28,
  Adventure = 12,
  Animation = 16,
  Comedy = 35,
  Crime = 80,
  Documentary = 99,
  Drama = 18,
  Family = 10751,
  Fantasy = 14,
  History = 36,
  Horror = 27,
  Music = 10402,
  Mystery = 9648,
  Romance = 10749,
  ScinceFiction = 878,
  TVMovie = 10770,
  Thriller = 53,
  War = 10752,
  Western = 37,
}

export const genres: IMovieGenres[] = [
  { key: GenreId.Action, genre_name: 'Action' },
  { key: GenreId.Adventure, genre_name: 'Adventure' },
  { key: GenreId.Animation, genre_name: 'Animation' },
  { key: GenreId.Comedy, genre_name: 'Comedy' },
  { key: GenreId.Crime, genre_name: 'Crime' },
  { key: GenreId.Documentary, genre_name: 'Documentary' },
  { key: GenreId.Drama, genre_name: 'Drama' },
  { key: GenreId.Family, genre_name: 'Family' },
  { key: GenreId.Fantasy, genre_name: 'Fantasy' },
  { key: GenreId.History, genre_name: 'History' },
  { key: GenreId.Horror, genre_name: 'Horror' },
  { key: GenreId.Music, genre_name: 'Music' },
  { key: GenreId.Mystery, genre_name: 'Mystery' },
  { key: GenreId.Romance, genre_name: 'Romance' },
  { key: GenreId.ScinceFiction, genre_name: 'Scince Fiction' },
  { key: GenreId.TVMovie, genre_name: 'TV Movie' },
  { key: GenreId.Thriller, genre_name: 'Thriller' },
  { key: GenreId.War, genre_name: 'War' },
  { key: GenreId.Western, genre_name: 'Western' },
];

export const languages: IMovieLanguages[] = [
  { key: 'bi', language: 'Bislama', name: '' },
  { key: 'cs', language: 'Czech', name: '' },
  { key: 'ba', language: 'Bashkir', name: '' },
  { key: 'ae', language: 'Avestan', name: '' },
  { key: 'av', language: 'Avaric', name: '' },
  { key: 'de', language: 'German', name: '' },
  { key: 'mt', language: 'Maltese', name: '' },
  { key: 'om', language: 'Oromo', name: '' },
  { key: 'rm', language: 'Raeto-Romance', name: '' },
  { key: 'so', language: 'Somali', name: 'Somali' },
  { key: 'ts', language: 'Tsonga', name: '' },
  { key: 'vi', language: 'Vietnamese', name: 'Tiếng Việt' },
  { key: 'gn', language: 'Guarani', name: '' },
  { key: 'ig', language: 'Igbo', name: '' },
  { key: 'it', language: 'Italian', name: 'Italiano' },
  { key: 'ki', language: 'Kikuyu', name: '' },
  { key: 'ku', language: 'Kurdish', name: '' },
  { key: 'la', language: 'Latin', name: 'Latin' },
  { key: 'ln', language: 'Lingala', name: '' },
  { key: 'lb', language: 'Letzeburgesch', name: '' },
  { key: 'ny', language: 'Chichewa; Nyanja', name: '' },
  { key: 'pl', language: 'Polish', name: 'Polski' },
  { key: 'si', language: 'Sinhalese', name: 'සිංහල' },
  { key: 'to', language: 'Tonga', name: '' },
  { key: 'az', language: 'Azerbaijani', name: 'Azərbaycan' },
  { key: 'ce', language: 'Chechen', name: '' },
  { key: 'cu', language: 'Slavic', name: '' },
  { key: 'da', language: 'Danish', name: 'Dansk' },
  { key: 'hz', language: 'Herero', name: '' },
  { key: 'ie', language: 'Interlingue', name: '' },
  { key: 'rw', language: 'Kinyarwanda', name: 'Kinyarwanda' },
  { key: 'mi', language: 'Maori', name: '' },
  { key: 'no', language: 'Norwegian', name: 'Norsk' },
  { key: 'pi', language: 'Pali', name: '' },
  { key: 'sk', language: 'Slovak', name: 'Slovenčina' },
  { key: 'se', language: 'Northern Sami', name: '' },
  { key: 'sm', language: 'Samoan', name: '' },
  { key: 'uk', language: 'Ukrainian', name: 'Український' },
  { key: 'en', language: 'English', name: 'English' },
  { key: 'ay', language: 'Aymara', name: '' },
  { key: 'ca', language: 'Catalan', name: 'Català' },
  { key: 'eo', language: 'Esperanto', name: 'Esperanto' },
  { key: 'ha', language: 'Hausa', name: 'Hausa' },
  { key: 'ho', language: 'Hiri Motu', name: '' },
  { key: 'hu', language: 'Hungarian', name: 'Magyar' },
  { key: 'io', language: 'Ido', name: '' },
  { key: 'ii', language: 'Yi', name: '' },
  { key: 'kn', language: 'Kannada', name: '?????' },
  { key: 'kv', language: 'Komi', name: '' },
  { key: 'li', language: 'Limburgish', name: '' },
  { key: 'oj', language: 'Ojibwa', name: '' },
  { key: 'ru', language: 'Russian', name: 'Pусский' },
  { key: 'sr', language: 'Serbian', name: 'Srpski' },
  { key: 'sv', language: 'Swedish', name: 'svenska' },
  { key: 'ty', language: 'Tahitian', name: '' },
  { key: 'zu', language: 'Zulu', name: 'isiZulu' },
  { key: 'ka', language: 'Georgian', name: 'ქართული' },
  { key: 'ch', language: 'Chamorro', name: "Finu' Chamorro" },
  { key: 'be', language: 'Belarusian', name: 'беларуская мова' },
  { key: 'br', language: 'Breton', name: '' },
  { key: 'kw', language: 'Cornish', name: '' },
  { key: 'fi', language: 'Finnish', name: 'suomi' },
  { key: 'sh', language: 'Serbo-Croatian', name: '' },
  { key: 'nn', language: 'Norwegian Nynorsk', name: '' },
  { key: 'tt', language: 'Tatar', name: '' },
  { key: 'tg', language: 'Tajik', name: '' },
  { key: 'vo', language: 'Volapük', name: '' },
  { key: 'ps', language: 'Pushto', name: 'پښتو' },
  { key: 'mk', language: 'Macedonian', name: '' },
  { key: 'fr', language: 'French', name: 'Français' },
  { key: 'bm', language: 'Bambara', name: 'Bamanankan' },
  { key: 'eu', language: 'Basque', name: 'euskera' },
  { key: 'fj', language: 'Fijian', name: '' },
  { key: 'id', language: 'Indonesian', name: 'Bahasa indonesia' },
  { key: 'mg', language: 'Malagasy', name: '' },
  { key: 'na', language: 'Nauru', name: '' },
  { key: 'xx', language: 'No Language', name: 'No Language' },
  { key: 'qu', language: 'Quechua', name: '' },
  { key: 'sq', language: 'Albanian', name: 'shqip' },
  { key: 'ti', language: 'Tigrinya', name: '' },
  { key: 'tw', language: 'Twi', name: '' },
  { key: 'wa', language: 'Walloon', name: '' },
  { key: 'ab', language: 'Abkhazian', name: '' },
  { key: 'bs', language: 'Bosnian', name: 'Bosanski' },
  { key: 'af', language: 'Afrikaans', name: 'Afrikaans' },
  { key: 'an', language: 'Aragonese', name: '' },
  { key: 'fy', language: 'Frisian', name: '' },
  { key: 'gu', language: 'Gujarati', name: '' },
  { key: 'ik', language: 'Inupiaq', name: '' },
  { key: 'ja', language: 'Japanese', name: '日本語' },
  { key: 'ko', language: 'Korean', name: '한국어/조선말' },
  { key: 'lg', language: 'Ganda', name: '' },
  { key: 'nl', language: 'Dutch', name: 'Nederlands' },
  { key: 'os', language: 'Ossetian; Ossetic', name: '' },
  { key: 'el', language: 'Greek', name: 'ελληνικά' },
  { key: 'bn', language: 'Bengali', name: 'বাংলা' },
  { key: 'cr', language: 'Cree', name: '' },
  { key: 'km', language: 'Khmer', name: '' },
  { key: 'lo', language: 'Lao', name: '' },
  { key: 'nd', language: 'Ndebele', name: '' },
  { key: 'ne', language: 'Nepali', name: '' },
  { key: 'sc', language: 'Sardinian', name: '' },
  { key: 'sw', language: 'Swahili', name: 'Kiswahili' },
  { key: 'tl', language: 'Tagalog', name: '' },
  { key: 'ur', language: 'Urdu', name: 'اردو' },
  { key: 'ee', language: 'Ewe', name: 'Èʋegbe' },
  { key: 'aa', language: 'Afar', name: '' },
  { key: 'co', language: 'Corsican', name: '' },
  { key: 'et', language: 'Estonian', name: 'Eesti' },
  { key: 'is', language: 'Icelandic', name: 'Íslenska' },
  { key: 'ks', language: 'Kashmiri', name: '' },
  { key: 'kr', language: 'Kanuri', name: '' },
  { key: 'ky', language: 'Kirghiz', name: '??????' },
  { key: 'kj', language: 'Kuanyama', name: '' },
  { key: 'nr', language: 'Ndebele', name: '' },
  { key: 'or', language: 'Oriya', name: '' },
  { key: 'wo', language: 'Wolof', name: 'Wolof' },
  { key: 'za', language: 'Zhuang', name: '' },
  { key: 'ar', language: 'Arabic', name: 'العربية' },
  { key: 'cv', language: 'Chuvash', name: '' },
  { key: 'fo', language: 'Faroese', name: '' },
  { key: 'hr', language: 'Croatian', name: 'Hrvatski' },
  { key: 'ms', language: 'Malay', name: 'Bahasa melayu' },
  { key: 'nb', language: 'Norwegian Bokmål', name: 'Bokmål' },
  { key: 'rn', language: 'Rundi', name: 'Kirundi' },
  { key: 'sn', language: 'Shona', name: '' },
  { key: 'st', language: 'Sotho', name: '' },
  { key: 'tr', language: 'Turkish', name: 'Türkçe' },
  { key: 'am', language: 'Amharic', name: '' },
  { key: 'fa', language: 'Persian', name: 'فارسی' },
  { key: 'hy', language: 'Armenian', name: '' },
  { key: 'pa', language: 'Punjabi', name: 'ਪੰਜਾਬੀ' },
  { key: 'as', language: 'Assamese', name: '' },
  { key: 'ia', language: 'Interlingua', name: '' },
  { key: 'lv', language: 'Latvian', name: 'Latviešu' },
  { key: 'lu', language: 'Luba-Katanga', name: '' },
  { key: 'mr', language: 'Marathi', name: '' },
  { key: 'mn', language: 'Mongolian', name: '' },
  { key: 'pt', language: 'Portuguese', name: 'Português' },
  { key: 'th', language: 'Thai', name: 'ภาษาไทย' },
  { key: 'tk', language: 'Turkmen', name: '' },
  { key: 've', language: 'Venda', name: '' },
  { key: 'dv', language: 'Divehi', name: '' },
  { key: 'gv', language: 'Manx', name: '' },
  { key: 'kl', language: 'Kalaallisut', name: '' },
  { key: 'kk', language: 'Kazakh', name: 'қазақ' },
  { key: 'lt', language: 'Lithuanian', name: 'Lietuvių' },
  { key: 'my', language: 'Burmese', name: '' },
  { key: 'sl', language: 'Slovenian', name: 'Slovenščina' },
  { key: 'sd', language: 'Sindhi', name: '' },
  { key: 'cn', language: 'Cantonese', name: '广州话 / 廣州話' },
  { key: 'hi', language: 'Hindi', name: 'हिन्दी' },
  { key: 'cy', language: 'Welsh', name: 'Cymraeg' },
  { key: 'ht', language: 'Haitian; Haitian Creole', name: '' },
  { key: 'iu', language: 'Inuktitut', name: '' },
  { key: 'jv', language: 'Javanese', name: '' },
  { key: 'mh', language: 'Marshall', name: '' },
  { key: 'sa', language: 'Sanskrit', name: '' },
  { key: 'ss', language: 'Swati', name: '' },
  { key: 'te', language: 'Telugu', name: 'తెలుగు' },
  { key: 'kg', language: 'Kongo', name: '' },
  { key: 'ml', language: 'Malayalam', name: '' },
  { key: 'uz', language: 'Uzbek', name: 'ozbek' },
  { key: 'sg', language: 'Sango', name: '' },
  { key: 'xh', language: 'Xhosa', name: '' },
  { key: 'es', language: 'Spanish', name: 'Español' },
  { key: 'su', language: 'Sundanese', name: '' },
  { key: 'ug', language: 'Uighur', name: '' },
  { key: 'yi', language: 'Yiddish', name: '' },
  { key: 'yo', language: 'Yoruba', name: 'Èdè Yorùbá' },
  { key: 'zh', language: 'Mandarin', name: '普通话' },
  { key: 'he', language: 'Hebrew', name: 'עִבְרִית' },
  { key: 'bo', language: 'Tibetan', name: '' },
  { key: 'ak', language: 'Akan', name: '' },
  { key: 'mo', language: 'Moldavian', name: '' },
  { key: 'ng', language: 'Ndonga', name: '' },
  { key: 'dz', language: 'Dzongkha', name: '' },
  { key: 'ff', language: 'Fulah', name: 'Fulfulde' },
  { key: 'gd', language: 'Gaelic', name: '' },
  { key: 'ga', language: 'Irish', name: 'Gaeilge' },
  { key: 'gl', language: 'Galician', name: 'Galego' },
  { key: 'nv', language: 'Navajo', name: '' },
  { key: 'oc', language: 'Occitan', name: '' },
  { key: 'ro', language: 'Romanian', name: 'Română' },
  { key: 'ta', language: 'Tamil', name: 'தமிழ்' },
  { key: 'tn', language: 'Tswana', name: '' },
  { key: 'bg', language: 'Bulgarian', name: 'български език' },
];