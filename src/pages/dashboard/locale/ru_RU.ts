const ru_RU = {
  title: 'Панели мониторинга',
  list: 'Список панелей',
  back_icon_tip: 'Вернуться назад, если нет предыдущей страницы, то вернуться к списку панелей',
  back_icon_tip_is_built_in: 'Вернуться назад, если нет предыдущей страницы, то вернуться в центр шаблонов',
  name: 'Название панели',
  tags: 'Теги',
  ident: 'Английский идентификатор',
  ident_msg: 'Пожалуйста, введите английские буквы, цифры, дефисы',
  search_placeholder: 'Название панели, теги',
  refresh_tip: 'Интервал обновления меньше шага ({{num}}s) не будет обновлять данные',
  refresh_btn: 'Обновить',
  share_btn: 'Поделиться',
  export_btn: 'Экспорт (CSV)',
  clear_cache_btn: 'Очистить кэш',
  clear_cache_btn_tip: 'Очистить кэш ширины столбцов таблицы, изменения вступят в силу после обновления страницы',
  inspect_btn: 'Проверить',
  public: {
    name: 'Доступ',
    unpublic: 'Закрытый доступ',
    public_cate: 'Тип',
    cate: {
      '0': 'Анонимный доступ',
      '1': 'Доступ после входа',
      '2': 'Авторизованный доступ',
    },
    bgids: 'Авторизованные бизнес-группы',
    theme_link: {
      dark: 'Ссылка на темную тему',
      light: 'Ссылка на светлую тему',
    },
  },
  default_filter: {
    title: 'Фильтр',
    public: 'Общие панели',
    all: 'Панели бизнес-группы',
    all_tip: 'Этот параметр покажет все панели, связанные с вашей бизнес-группой',
  },
  create_title: 'Создать панель',
  edit_title: 'Редактировать панель',
  add_panel: 'Добавить диаграмму',
  cluster: 'Кластер',
  full_screen: 'Полноэкранный режим',
  exit_full_screen: 'Выйти из полноэкранного режима',
  copyPanelTip: 'Диаграмма скопирована. Нажмите "Добавить диаграмму", чтобы вставить.',
  batch: {
    import: 'Импорт панели JSON',
    label: 'Панель JSON',
    import_grafana: 'Импорт панели Grafana',
    import_grafana_tip: 'Поддерживается импорт панелей только из Prometheus типа источников данных, а также диаграммы и функции, поддерживаемые Nightingale <a>Отзывы</a>',
    import_grafana_tip_version_error: 'Не поддерживается импорт панелей конфигурации версии меньше v7',
    import_grafana_tip_version_warning: 'Импорт панелей конфигурации версии меньше v8, возможны частичные не поддерживаемые диаграммы и проблемы с рендерингом',
    import_grafana_url: 'Ссылка на панель Grafana (рекомендуется)',
    import_grafana_url_label: 'Ссылка на панель Grafana',
    continueToImport: 'Продолжить импорт',
    noSelected: 'Пожалуйста, выберите панель',
    import_builtin: 'Импорт встроенной панели',
    import_builtin_board: 'Встроенная панель',
    clone: {
      name: 'Название',
      result: 'Результат',
      errmsg: 'Ошибка',
    },
  },
  link: {
    title: 'Ссылка на панель',
    name: 'Название ссылки',
    url: 'Адрес ссылки',
    isNewBlank: 'Открывать ли в новом окне',
    dashboardIds_placeholder: 'Пожалуйста, выберите панель',
  },
  var: {
    vars: 'Переменные',
    btn: 'Добавить переменную',
    title: {
      list: 'Список переменных',
      add: 'Добавить переменную',
      edit: 'Редактировать переменную',
    },
    name: 'Название переменной',
    name_msg: 'Поддерживаются только цифры и символы подчеркивания',
    name_repeat_msg: 'Название переменной уже существует',
    label: 'Отображаемое название',
    type: 'Тип переменной',
    type_map: {
      query: 'Запрос (Query)',
      custom: 'Пользовательский (Custom)',
      textbox: 'Текстовое поле (Text box)',
      constant: 'Константа (Constant)',
      datasource: 'Источник данных (Datasource)',
      datasourceIdentifier: 'Идентификатор источника данных (Datasource identifier)',
      hostIdent: 'Идентификатор хоста (Host ident)',
    },
    hide: 'Скрыть переменную',
    hide_map: {
      yes: 'Да',
      no: 'Нет',
    },
    definition: 'Определение переменной',
    definition_msg1: 'Пожалуйста, введите определение переменной',
    definition_msg2: 'Определение переменной должно быть допустимым JSON',
    reg: 'Регулярное выражение',
    reg_tip:
      'Необязательно, через регулярное выражение можно отфильтровать или извлечь значения. Здесь введены <a>регулярные выражения в виде строк</a>, состоящие из шаблонов, содержащихся в косых чертах',
    multi: 'Множественный выбор',
    allOption: 'Включить все',
    allValue: 'Пользовательские значения',
    textbox: {
      defaultValue: 'По умолчанию',
      defaultValue_tip: 'Необязательно, только для использования в качестве значения по умолчанию при первом загрузке',
    },
    custom: {
      definition: 'Разделительные значения',
    },
    constant: {
      definition: 'Константное значение',
      defaultValue_tip: 'Определить скрытое константное значение',
    },
    datasource: {
      definition: 'Тип источника данных',
      defaultValue: 'По умолчанию',
      regex: 'Фильтрация источника данных',
      regex_tip:
        'Необязательно, через регулярное выражение можно отфильтровать или извлечь значения. Здесь введены <a>регулярные выражения в виде строк</a>, состоящие из шаблонов, содержащихся в косых чертах.',
    },
    hostIdent: {
      invalid: 'Идентификатор хоста требует авторизацию, панель в анонимном режиме не будет доступна',
      invalid2: 'Панель уже настроена с переменной идентификатора хоста, невозможно анонимное обращение',
    },
    help_tip:
      '\n      Описание использования переменных\n      <1 />\n      ${variable_name}: значение переменной панели\n      <1 />\n      ${__field.name}: название легенды\n      <1 />\n      ${__field.value}: значение легенды\n      <1 />\n      ${__field.labels.X}: значение метки\n      <1 />\n      ${__field.labels.__name__}: название метрики\n      <1 />\n      ${__interval}: временной интервал (секунды), например 15s\n      <1 />\n      ${__interval_ms}: временной интервал (миллисекунды), например 15000ms\n      <1 />\n      ${__range}: временной диапазон (секунды), например 3600s\n      <1 />\n      ${__range_ms}: временной диапазон (миллисекунды), например 3600000ms\n      <1 />\n      ${__rate_interval}: временной интервал (секунды), __interval * 4\n      <1 />\n      ${__from}: время начала (миллисекунды)\n      <1 />\n      ${__from_date_seconds}: время начала (секунды)\n      <1 />\n      ${__from_date_iso}: время начала, ISO 8601/RFC 3339\n      <1 />\n      上述语法适用于 ${__to}\n    ',
  },
  row: {
    edit_title: 'Редактировать группу',
    delete_title: 'Удалить группу',
    name: 'Название группы',
    delete_confirm: 'Вы уверены, что хотите удалить группу и диаграмму?',
    cancel: 'Отмена',
    ok: 'Удалить группу и диаграмму',
    ok2: 'Удалить только группу',
    panels: '{{count}} диаграмм',
    panels_plural: '{{count}} диаграмм',
  },
  panel: {
    title: {
      add: 'Добавить диаграмму',
      edit: 'Редактировать диаграмму',
    },
    base: {
      title: 'Конфигурация панели',
      name: 'Заголовок',
      name_tip: 'Для табличных диаграмм должен быть установлен заголовок, иначе редактирование диаграммы будет конфликтовать с заголовком таблицы',
      link: {
        label: 'Ссылка',
        label_tip: `
          Инструкции по использованию переменных<br />
          \${variable_name}: Значение переменной панели мониторинга
        `,
        btn: 'Добавить',
        name: 'Название ссылки',
        name_msg: 'Пожалуйста, введите название ссылки',
        url: 'Адрес ссылки',
        url_msg: 'Пожалуйста, введите адрес ссылки',
        isNewBlank: 'Открывать ли в новом окне',
      },
      description: 'Примечание',
      repeatOptions: {
        title: 'Повторение диаграммы',
        byVariable: 'Переменная',
        byVariableTip: 'Повторение диаграммы в зависимости от значения переменной',
        maxPerRow: 'Максимальное количество на строку',
      },
    },
    options: {
      legend: {
        displayMode: {
          label: 'Режим отображения',
          table: 'Таблица',
          list: 'Список',
          hidden: 'Скрыть',
        },
        placement: 'Положение',
        max: 'Максимальное значение',
        min: 'Минимальное значение',
        avg: 'Среднее значение',
        sum: 'Сумма',
        last: 'Текущее значение',
        variance: 'Дисперсия',
        stdDev: 'Стандартное отклонение',
        columns: 'Поля для отображения',
        behaviour: {
          label: 'Поведение при однократном нажатии',
          showItem: 'Показать элемент',
          hideItem: 'Скрыть элемент',
        },
        selectMode: {
          label: 'Режим выбора',
          single: 'Один выбор',
          multiple: 'Множественный выбор',
        },
        heightInPercentage: 'Высота в процентах',
        heightInPercentage_tip: 'Legend высота занимает максимальную высоту панели, минимальное значение 20%, максимальное значение 80%',
        widthInPercentage: 'Ширина в процентах',
        widthInPercentage_tip: 'Legend ширина занимает максимальную ширину панели, минимальное значение 20%, максимальное значение 80%',
      },
      thresholds: {
        title: 'Пороговое значение',
        btn: 'Добавить пороговое значение',
        mode: {
          label: 'Режим порогового значения',
          tip: 'Формула расчета Y-оси минимальное значение + (Y-оси максимальное значение - Y-оси минимальное значение) * (процентное значение / 100)',
          absolute: 'Абсолютное значение',
          percentage: 'Процентное',
        },
      },
      thresholdsStyle: {
        label: 'Стиль порогового значения',
        off: 'Выключить',
        line: 'Линия',
        dashed: 'Пунктирная линия',
        'line+area': 'Линия+Область',
        'dashed+area': 'Пунктирная линия+Область',
      },
      tooltip: {
        mode: 'Режим',
        sort: 'Сортировка',
      },
      valueMappings: {
        title: 'Значения отображения',
        btn: 'Добавить',
        type: 'Условие',
        type_tip:
          '\n          <0>Диапазон значений по умолчанию: from=-Infinity; to=Infinity </0>\n          <1>Специальное значение Null: соответствует null или undefined или no data</1>\n        ',
        type_map: {
          special: 'Фиксированное значение (число)',
          textValue: 'Фиксированное значение (текст)',
          range: 'Диапазон значений',
          specialValue: 'Специальное значение',
        },
        value_placeholder: 'Точное соответствие значению',
        text: 'Текст',
        text_placeholder: 'Необязательно',
        color: 'Цвет',
        operations: 'Действия',
      },
      colors: {
        name: 'Настройка цветов',
        scheme: 'Схема цветов',
        reverse: 'Инвертировать цвет',
      },
    },
    standardOptions: {
      title: 'Расширенные настройки',
      unit: 'Единица',
      unit_tip:
        '\n        <0>По умолчанию будет выполнено SI Prefixes обработка, если не хотите использовать стандартную обработку, выберите none для отключения</0>\n        <1>Data(SI): 1000, единица измерения B, kB, MB, GB, TB, PB, EB, ZB, YB</1>\n        <2>Data(IEC): 1024, единица измерения B, KiB, MiB, GiB, TiB, PiB, EiB, ZiB, YiB</2>\n        <3>bits: b</3>\n        <4>bytes: B</4>\n      ',
      datetime: 'Форматирование времени',
      min: 'Минимальное значение',
      max: 'Максимальное значение',
      decimals: 'Количество знаков после запятой',
      displayName: 'Отображаемое название',
      displayName_tip: 'Пользовательское название серии',
    },
    overrides: {
      matcher: {
        id: 'Тип сопоставления',
        byFrameRefID: {
          option: 'По имени условия запроса',
          name: 'Имя условия запроса',
        },
        byName: {
          option: 'По имени поля',
          name: 'Имя поля',
        },
      },
    },
    custom: {
      title: 'Стиль диаграммы',
      calc: 'Вычисление значения',
      calc_tip: 'Для временных данных необходимо вычислить значение для всех точек данных, для не временных данных этот параметр не учитывается',
      maxValue: 'Максимальное значение',
      baseColor: 'Базовый цвет',
      serieWidth: 'Ширина названия',
      sortOrder: 'Сортировка',
      textMode: 'Режим отображения',
      valueAndName: 'Значение и название',
      value: 'Значение',
      name: 'Название',
      background: 'Фон',
      colorMode: 'Режим цвета',
      valueField: 'Поле значения',
      valueField_tip: 'Value - это зарезервированное слово, используемое для имени поля временных данных',
      valueField_tip2: 'Необходимо выбрать поле, значение которого является числовым',
      nameField: 'Поле названия',
      nameField_tip: 'Использовать значение поля названия в качестве названия серии',
      colSpan: 'Максимальное количество на строку',
      colSpanTip: 'Скоро будет устаревшим, выбор "Автоматически" приведет к использованию нижестоящего направления',
      colSpanAuto: 'Автоматически',
      textSize: {
        title: 'Размер шрифта заголовка',
        value: 'Размер шрифта значения',
      },
      colorRange: 'Цвет',
      reverseColorOrder: 'Перевернуть цвет',
      colorDomainAuto: 'Автоматически min/max значения',
      colorDomainAuto_tip: 'По умолчанию автоматически берется min max значения из series',
      fontBackground: 'Цвет текста',
      detailName: 'Название ссылки',
      detailUrl: 'Адрес ссылки',
      stat: {
        graphMode: 'Режим диаграммы',
        none: 'Не отображать',
        area: 'Мини-диаграмма',
        orientation: 'Направление',
        orientationTip: 'При выборе "Автоматически" будет автоматически выбрано направление в зависимости от ширины и высоты диаграммы',
        orientationValueMap: {
          auto: 'Автоматически',
          vertical: 'Вертикально',
          horizontal: 'Горизонтально',
        },
      },
      pie: {
        countOfValueField: 'Поле значения',
        countOfValueField_tip: 'После включения будет подсчитываться количество значений, иначе будет использоваться значение поля',
        legengPosition: 'Положение легенды',
        max: 'Максимальное количество блоков',
        max_tip: 'Если количество блоков превышает это значение, они будут объединены в другие',
        donut: 'Режим кольцевой диаграммы',
        labelWithName: 'Название метки',
        labelWithValue: 'Название метрики',
        detailName: 'Название ссылки',
        detailUrl: 'Адрес ссылки',
      },
      table: {
        displayMode: 'Режим отображения',
        showHeader: 'Показывать заголовки',
        seriesToRows: 'Значения каждой серии',
        labelsOfSeriesToRows: 'Значения меток каждой серии',
        labelValuesToRows: 'Значения, полученные путем агрегации по указанным измерениям',
        columns: 'Поля для отображения',
        aggrDimension: 'Измерение',
        sortColumn: 'По умолчанию сортировка',
        sortOrder: 'По умолчанию сортировка',
        link: {
          mode: 'Режим ссылки',
          cellLink: 'Ссылка на ячейку',
          appendLinkColumn: 'Добавить ссылку на столбец',
        },
        tableLayout: {
          label: 'Макет таблицы',
          label_tip:
            'Фиксированный макет, ширина столбцов делится по количеству столбцов без горизонтального полосы прокрутки. Автоматический макет, максимальная ширина по умолчанию 150px, содержимое таблицы может переполниться и вызвать горизонтальное полосы прокрутки.',
          auto: 'Автоматически',
          fixed: 'Фиксированный',
        },
        nowrap: 'Текст не переносится',
        organizeFields: 'Сортировка полей',
        colorMode_tip: 'Режим цвета применяется к "Полю значения"',
        pageLimit: 'Количество строк на странице',
      },
      text: {
        textColor: 'Цвет текста',
        textDarkColor: 'Темный цвет текста',
        bgColor: 'Цвет фона',
        textSize: 'Размер текста',
        justifyContent: {
          name: 'Выравнивание по горизонтали',
          unset: 'Не устанавливать',
          flexStart: 'По левому краю',
          center: 'По центру',
          flexEnd: 'По правому краю',
        },
        alignItems: {
          name: 'Выравнивание по вертикали',
          unset: 'Не устанавливать',
          flexStart: 'По верхнему краю',
          center: 'По центру',
          flexEnd: 'По нижнему краю',
        },
        content: 'Содержимое',
        content_placeholder: 'Поддерживает Markdown и HTML',
        content_tip:
          '\n          <0>По умолчанию простой режим, через настройку простого конфигурационного карточного стиля можно настроить</0>\n          <1>Поддерживает Markdown и HTML</1>\n          <2>Если ввести Markdown или HTML, рекомендуется отключить выравнивание в верхней части</2>\n        ',
      },
      timeseries: {
        drawStyle: 'Режим рисования',
        lineInterpolation: 'Интерполяция линии',
        spanNulls: 'Соединение пустых значений',
        spanNulls_0: 'Выключить',
        spanNulls_1: 'Включить',
        lineWidth: 'Ширина линии',
        fillOpacity: 'Прозрачность',
        gradientMode: 'Градиент',
        gradientMode_opacity: 'Включить',
        gradientMode_none: 'Выключить',
        stack: 'Наложение',
        stack_noraml: 'Включить',
        stack_off: 'Выключить',
        yAxis: {
          title: 'Настройка Y-оси',
          rightYAxis: {
            label: 'Правая Y-ось',
            noraml: 'Включить',
            off: 'Выключить',
          },
        },
        showPoints: 'Показывать точки',
        showPoints_always: 'Показывать',
        showPoints_none: 'Не показывать',
        pointSize: 'Размер точки',
      },
      iframe: {
        src: 'Адрес iframe',
      },
      heatmap: {
        xAxisField: 'X-ось',
        yAxisField: 'Y-ось',
        valueField: 'Поле значений',
      },
      barchart: {
        xAxisField: 'X-ось',
        yAxisField: 'Y-ось',
        colorField: 'Поле цветов',
        barMaxWidth: 'Максимальная ширина столбца',
        colorField_tip: 'Name - это зарезервированное слово, используемое для имени поля значений серии',
      },
      barGauge: {
        topn: 'Максимальное количество',
        combine_other: 'Другое',
        combine_other_tip: 'Если данные превышают максимальное количество, они будут объединены в один другой элемент',
        otherPosition: {
          label: 'Положение другого элемента',
          tip: 'Положение другого элемента, можно выбрать в начале или в конце',
          options: {
            none: 'По умолчанию',
            top: 'В начале',
            bottom: 'В конце',
          },
        },
        displayMode: 'Режим отображения',
        valueMode: {
          label: 'Значение',
          color: 'Цвет',
          hidden: 'Скрытый',
        },
      },
    },
    inspect: {
      title: 'Проверка',
      query: 'Запрос',
      json: 'Конфигурация диаграммы',
    },
  },
  export: {
    copy: 'Копировать JSON в буфер обмена',
  },
  query: {
    title: 'Условия запроса',
    transform: 'Преобразование данных',
    datasource_placeholder: 'Пожалуйста, выберите источник данных',
    datasource_msg: 'Пожалуйста, выберите источник данных',
    time: 'Выбор времени',
    time_tip: 'Вы можете указать временной диапазон, по умолчанию используется глобальный временной диапазон панели',
    prometheus: {
      maxDataPoints: {
        tip: 'Максимальное количество точек на кривую, по умолчанию — ширина панели (по умолчанию — 240 при добавлении новой), рассчитывается как шаг = (конец — начало) / maxDataPoints',
        tip_2: 'Максимальное количество точек на кривую, по умолчанию — ширина панели, рассчитывается как шаг = (конец — начало) / maxDataPoints',
      },
      minStep: {
        tip: 'Минимальный шаг, по умолчанию 15, вычислить шаг = max(step, minStep, safeStep), safeStep = (end - start) / 11000',
      },
      step: {
        tag_tip: 'Расчет step = max((end - start) / maxDataPoints, minStep, safeStep), safeStep = (end - start) / 11000',
      },
    },
    expression_placeholder:
      'Математические операции над одним или несколькими запросами. Используйте ${refId} для ссылки на запросы, например, $A, $B, $C и т.д. Сумма двух скалярных значений: $A + $B > 10',
    legendTip: 'Переопределение или шаблон для названия легенды, например, {{hostname}} будет заменено на значение метки hostname',
    legendTip2:
      'Переопределение или шаблон для названия легенды, например, {{hostname}} будет заменено на значение метки hostname, в настоящее время работает только для данных временных рядов',
  },
  detail: {
    datasource_empty: 'Нет информации об источнике данных, сначала настройте источник данных',
    invalidTimeRange: 'Недопустимые значения __from и __to',
    invalidDatasource: 'Недопустимый источник данных',
    fullscreen: {
      notification: {
        esc: 'Нажмите ESC для выхода из полноэкранного режима',
        theme: 'Переключение темы',
      },
    },
    saved: 'Успешно сохранено',
    expired: 'Панель была изменена кем-то другим. Чтобы избежать перезаписи, обновите панель для просмотра последней конфигурации и данных',
    prompt: {
      title: 'Есть несохраненные изменения',
      message: 'Хотите сохранить изменения?',
      cancelText: 'Отмена',
      discardText: 'Отменить',
      okText: 'Сохранить',
    },
    noPanelToPaste: 'Нет диаграмм для вставки',
  },
  settings: {
    graphTooltip: {
      label: 'Всплывающие подсказки (Tooltip)',
      tip: 'Управление поведением всплывающих подсказок для всех диаграмм',
      default: 'По умолчанию',
      sharedCrosshair: 'Общий перекрестный указатель',
      sharedTooltip: 'Общие всплывающие подсказки (Tooltip)',
    },
    graphZoom: {
      label: 'Поведение масштабирования',
      tip: 'Управление поведением масштабирования для всех диаграмм',
      default: 'По умолчанию',
      updateTimeRange: 'Обновить временной диапазон',
    },
    save: 'Сохранить панель',
  },
  visualizations: {
    timeseries: 'Временной ряд',
    barchart: 'Столбчатая диаграмма',
    stat: 'Статистика',
    table: 'Таблица',
    pie: 'Круговая диаграмма',
    hexbin: 'Сотовая диаграмма',
    barGauge: 'Рейтинг',
    text: 'Текстовая карточка',
    gauge: 'Спидометр',
    heatmap: 'Тепловая карта',
    iframe: 'Встроенный документ (iframe)',
    row: 'Группа',
    pastePanel: 'Вставить диаграмму',
  },
  calcs: {
    lastNotNull: 'Последнее ненулевое значение',
    last: 'Последнее значение',
    firstNotNull: 'Первое ненулевое значение',
    first: 'Первое значение',
    min: 'Минимальное значение',
    max: 'Максимальное значение',
    avg: 'Среднее значение',
    sum: 'Сумма',
    count: 'Количество',
    origin: 'Исходное значение',
  },
  annotation: {
    add: 'Добавить аннотацию',
    edit: 'Редактировать аннотацию',
    description: 'Описание',
    tags: 'Теги',
    updated: 'Аннотация обновлена',
    deleted: 'Аннотация удалена',
  },
};

export default ru_RU;
