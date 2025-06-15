export type ProcessorType = 'relabel' | 'label_enrich' | 'callback' | 'ai_summary';

export type BaseItem = {
  id: number;
  name: string;
  team_ids: number[];
  team_names: string[];
  description: string;
  update_at: number;
  update_by: string;
  filter_enable: boolean;
  label_filters: {
    key: string;
    func: string;
    value: string;
  }[];
  attribute_filters: {
    key: string;
    func: string;
    value: string;
  }[];
};

export type RelabelItem = BaseItem & {
  processors: {
    type: 'relabel';
    config: {};
  }[];
};

export type CallbackItem = BaseItem & {
  processors: {
    type: 'callback';
    config: {
      url: string;
      header?: Record<string, string>;
      timeout?: string;
      insecure_skip_verify?: boolean;
      proxy?: string;
      basic_auth_user?: string;
      basic_auth_pass?: string;
    };
  }[];
};

export type LabelEnrichItem = BaseItem & {
  processors: {
    type: 'label_enrich';
    config: {
      label_source_type: 'built_in_mapping';
      label_mapping_id: number;
      source_keys: {
        source_key: string;
        target_key: string;
      }[];
      append_keys: {
        source_key: string;
        rename_key: boolean;
        target_key: string;
      };
    };
  }[];
};

export type AISummaryItem = BaseItem & {
  processors: {
    type: 'ai_summary';
    config: {
      url: string;
      api_key: string;
      model_name: string;
      prompt_template: string;
      custom_params?: Record<string, string>;
      timeout?: number;
      skip_ssl_verify?: boolean;
      header?: { key: string; value: string }[];
      proxy?: string;
      annotations?: Record<string, string>;
    };
  }[];
};

export type Item = RelabelItem | LabelEnrichItem | CallbackItem | AISummaryItem;
