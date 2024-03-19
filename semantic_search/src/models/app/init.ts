import { $activeCollection, $answer, $answerStatus, $k, $listCollections, $query, setActiveCollection, setAnswer, setAnswerStatus, setK, setListCollections, setQuery } from ".";

$k.on(setK, (_, k) => k);

$query.on(setQuery, (_, q) => q);

$activeCollection.on(setActiveCollection, (_, c) => c);

$listCollections.on(setListCollections, (_, lc) => lc);

$answerStatus.on(setAnswerStatus, (_, s) => s);

$answer.on(setAnswer, (_, s) => s);
