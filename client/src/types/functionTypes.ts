export interface NewTopicSubmit {
  (event: React.FormEvent<HTMLFormElement>): void;
}

export interface NewTopicChange {
  (event: React.ChangeEvent<HTMLInputElement>): void
}

export interface DeleteTopic {
  (topicId: string): void;
}

export interface UpdateScore {
  (topicId: string, up: boolean): void;
}
