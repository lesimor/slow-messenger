import React from 'react';
import { SectionList, Image, StyleSheet, Text, View } from 'react-native';

export default class FriendsList extends React.Component {
    render() {
        const sections = [
            { data: [{ value: "강병욱" }], title: '내 프로필' },
            { data: [{ value: "김민성" }, { value: "유재욱" }, { value: "이하영" }], title: '즐겨찾기' },
            { data: [{ value: "강병규" }, { value: "강성진" }, { value: "고동수" }, { value: "고승연" }, { value: "구현모" }], title: '친구' },
        ];

        return (
            <SectionList
                style={styles.sectionListContainer}
                renderItem={this._renderItem}
                renderSectionHeader={this._renderSectionHeader}
                stickySectionHeadersEnabled={true}
                keyExtractor={(item, index) => index}
                sections={sections}
            />
        );
    }

    _renderSectionHeader = ({ section }) => {
        return <SectionHeader title={section.title} />;
    };

    _renderItem = ({ item }) => {
        return (
            <SectionContent>
                <View style={styles.friendContainer}>
                    <View style={styles.friendImageContainer}>
                        <AppIconPreview /*iconUrl={manifest.iconUrl}*/ />
                    </View>

                    <View style={styles.friendNameContainer}>
                        <Text style={styles.friendNameText} numberOfLines={1}>
                            {item.value}
                        </Text>
                    </View>
                </View>
            </SectionContent>
        );
    }
}

const SectionHeader = ({ title }) => {
    return (
        <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>
                {title}
            </Text>
        </View>
    );
};

const SectionContent = props => {
    return (
        <View>
            {props.children}
        </View>
    );
};

const AppIconPreview = ({ iconUrl }) => {
    if (!iconUrl) {
        iconUrl =
            'https://s3.amazonaws.com/exp-brand-assets/ExponentEmptyManifest_192.png';
    }

    return (
        <Image
            source={{ uri: iconUrl }}
            style={styles.friendImage}
            resizeMode="cover"
        />
    );
};

const styles = StyleSheet.create({
    sectionListContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    friendContainer: {
        paddingHorizontal: 15,
        flexDirection: 'row',

    },
    friendImage: {
        width: 32,
        height: 32,
        borderRadius: 16
    },
    friendImageContainer: {
        marginRight: 15,
        paddingTop: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    friendNameContainer: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#EDEDED',
        paddingTop: 12,
        paddingBottom: 12,
    },
    friendNameText: {
        fontWeight: '600',
        fontSize: 18,

    },
    sectionHeaderContainer: {
        backgroundColor: '#fbfbfb',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ededed',
    },
    sectionHeaderText: {
        fontSize: 14,
    },
});
