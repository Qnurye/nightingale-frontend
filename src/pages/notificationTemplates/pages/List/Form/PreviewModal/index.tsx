import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';

import EventsTable from '@/pages/eventPipeline/pages/Form/TestModal/EventsTable';

import { NS } from '../../../../constants';
import { preview } from '../../../../services';
import HTML from '../../Editor/HTML';
import Text from '../../Editor/Text';
import Markdown from '../../Editor/Markdown';

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  content: {
    [index: string]: string;
  };
  isEmailType: boolean;
}

export default function PreviewModal(props: Props) {
  const { t } = useTranslation(NS);
  const { visible, setVisible, content, isEmailType } = props;
  const [resultModalVisible, setResultModalVisible] = useState(false);
  const [selectedEventIds, setSelectedEventIds] = useState<number[]>();
  const [previewData, setPreviewData] = useState<{ [index: string]: string }>();

  useEffect(() => {
    if (resultModalVisible && selectedEventIds && content) {
      preview({
        event_ids: selectedEventIds,
        tpl: {
          content,
        },
      }).then((res) => {
        setPreviewData(res);
      });
    }
  }, [resultModalVisible, _.join(selectedEventIds)]);

  return (
    <>
      <Modal
        visible={visible}
        title={t('preview.select_events')}
        width='80%'
        onCancel={() => {
          setVisible(false);
          setSelectedEventIds([]);
        }}
        onOk={() => {
          setVisible(false);
          setResultModalVisible(true);
        }}
      >
        <EventsTable selectedEventIds={selectedEventIds} onChange={setSelectedEventIds} />
      </Modal>
      <Modal
        visible={resultModalVisible}
        title={t('preview.result')}
        width='80%'
        onCancel={() => {
          setResultModalVisible(false);
          setSelectedEventIds([]);
        }}
        footer={null}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {_.map(previewData, (v, k) => {
            if (isEmailType) {
              if (k === 'subject') {
                return <Text key={k} label={k} previewResultStr={v} />;
              }
              return <HTML key={k} label={k} previewResultStr={v} />;
            }
            return <Markdown key={k} label={k} previewResultStr={v} />;
          })}
        </div>
      </Modal>
    </>
  );
}
